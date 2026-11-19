
import { createClient } from "npm:@supabase/supabase-js@2";

const origenesPermitidos = [
  "http://localhost:5173",
  "http://localhost:4173",
  "https://utilesexpres.com",
  "https://www.utilesexpres.com",
];

function obtenerCorsHeaders(req: Request) {
  const origen = req.headers.get("Origin");

  return {
    "Access-Control-Allow-Origin":
      origen && origenesPermitidos.includes(origen)
        ? origen
        : "https://utilesexpres.com",
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

function responder(
  req: Request,
  datos: Record<string, unknown>,
  status = 200
) {
  return Response.json(datos, {
    status,
    headers: obtenerCorsHeaders(req),
  });
}


Deno.serve(async (req) => {
  // Responder a las solicitudes CORS
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: obtenerCorsHeaders(req),
    });
  }

  // Solo permitir POST
  if (req.method !== "POST") {
    return responder(
      req,
      { error: "Método no permitido" },
      405
    );
  }

  try {
    // Recibir datos del pedido

const authorization = req.headers.get("Authorization") ?? "";

const token = /^Bearer\s+(.+)$/i.exec(authorization)?.[1]?.trim();

if (!token || token.startsWith("sb_")) {
  return responder(
    req,
    { error: "Debes iniciar sesión para realizar pedidos" },
    401
  );
}

const authClient = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!
);

const {
  data: { user },
  error: authError
} = await authClient.auth.getUser(token);

if (authError || !user) {
  return responder(
    req,
    { error: "Sesión inválida. Inicia sesión nuevamente" },
    401
  );
}

    const body = await req.json();
    const nombres = body.productos;
    const cliente = body.cliente;

    // Validar los productos
    if (
      !Array.isArray(nombres) ||
      nombres.length === 0 ||
      nombres.length > 50 ||
      !nombres.every(
        (nombre) =>
          typeof nombre === "string" &&
          nombre.trim().length > 0 &&
          nombre.length <= 200
      )
    ) {
      
return responder(
  req,
  { error: "Lista de productos inválida" },
  400
);
    }

    // Validar los datos del cliente
    if (
      !cliente ||
      typeof cliente !== "object" ||
      Array.isArray(cliente) ||
      typeof cliente.nombre !== "string" ||
      cliente.nombre.trim().length === 0 ||
      cliente.nombre.length > 150 ||
      typeof cliente.telefono !== "string" ||
      cliente.telefono.trim().length === 0 ||
      cliente.telefono.length > 30 ||
      typeof cliente.direccion !== "string" ||
      cliente.direccion.trim().length === 0 ||
      cliente.direccion.length > 500 ||
      (cliente.nota !== undefined &&
        (typeof cliente.nota !== "string" ||
          cliente.nota.length > 1000))
    ) {
      
return responder(
  req,
  { error: "Datos del cliente inválidos" },
  400
);

    }

    // Conectar con Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Consultar precios oficiales
    const { data, error } = await supabase
      .from("productos")
      .select("nombre, precio")
      .in("nombre", nombres);

    if (error) {
      console.error(
        "Error consultando productos:",
        error.message
      );

      
return responder(
  req,
  { error: "No se pudo consultar el catálogo" },
  500
);

    }

    // Comprobar que todos los productos existan
    if (
      !data ||
      data.length !== new Set(nombres).size
    ) {
      
return responder(
  req,
  { error: "Uno o más productos no existen" },
  400
);

    }

    // Crear mapa de precios oficiales
    const precios = new Map(
      data.map((producto) => [
        producto.nombre,
        Number(producto.precio),
      ])
    );

    // Calcular subtotal oficial
    const subtotal = nombres.reduce(
      (total, nombre) =>
        total + precios.get(nombre)!,
      0
    );

    // Preparar productos del pedido
    const productosPedido = nombres.map(
      (nombre) => ({
        nombre,
        precio: precios.get(nombre),
      })
    );

    // Guardar pedido en la base de datos
    const {
      data: pedidoGuardado,
      error: errorPedido
    } = await supabase
      .from("pedidos")
      .insert({
        cliente_nombre: cliente.nombre.trim(),
        cliente_telefono: cliente.telefono.trim(),
        cliente_direccion: cliente.direccion.trim(),
        cliente_nota: (cliente.nota ?? "").trim(),
        productos: productosPedido,
        subtotal,
      })
      .select("id")
      .single();

    if (errorPedido) {
      console.error(
        "Error guardando pedido:",
        errorPedido.message
      );

      
return responder(
  req,
  { error: "No se pudo guardar el pedido" },
  500
);

    }

    // Respuesta de pedido registrado
    return responder(req, {
      ok: true,
      pedido_id: pedidoGuardado.id,
      productos: nombres.length,
      subtotal,
      moneda: "BOB",
      estado: "pendiente",
    });

  } catch (error) {
    console.error(
      "Error procesando solicitud:",
      error
    );

    return responder(
      req,
      { error: "No se pudo procesar la solicitud" },
      400
    );
  }
});
