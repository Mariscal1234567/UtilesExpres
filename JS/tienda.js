(function () {
  /* ---------- Ilustraciones de producto (SVG inline) ---------- */
  var D = '#1e293b';
  var ART = {
    marker: function (c) { return '<g transform="rotate(-35 60 60)"><rect x="46" y="12" width="28" height="70" rx="8" fill="' + c + '"/><rect x="46" y="30" width="28" height="10" fill="#fff" opacity=".35"/><rect x="50" y="82" width="20" height="14" fill="' + D + '"/><rect x="55" y="96" width="10" height="12" rx="2" fill="#64748b"/></g>'; },
    pencil: function (c) { return '<g transform="rotate(40 60 60)"><rect x="47" y="10" width="26" height="70" fill="' + c + '"/><rect x="47" y="10" width="26" height="12" fill="#cbd5e1"/><rect x="47" y="22" width="26" height="5" fill="#94a3b8"/><path d="M47 80h26l-13 24z" fill="#f2d3a8"/><path d="M54 92h12l-6 12z" fill="' + D + '"/></g>'; },
    paint: function (c) { return '<g transform="rotate(-20 60 60)"><path d="M44 18h32l-4 14H48z" fill="#94a3b8"/><rect x="40" y="30" width="40" height="64" rx="6" fill="' + c + '"/><rect x="40" y="48" width="40" height="22" fill="#fff" opacity=".9"/><circle cx="60" cy="59" r="6" fill="' + c + '"/><path d="M44 94h32l-3 10H47z" fill="#94a3b8"/></g>'; },
    brush: function (c) { return '<g transform="rotate(35 60 60)"><rect x="54" y="8" width="12" height="62" rx="6" fill="' + c + '"/><rect x="52" y="66" width="16" height="12" fill="#cbd5e1"/><path d="M52 78h16c0 14-4 24-8 30-4-6-8-16-8-30z" fill="' + D + '"/></g>'; },
    canvas: function (c) { return '<rect x="18" y="20" width="84" height="74" rx="3" fill="#fff" stroke="#cbd5e1" stroke-width="4"/><path d="M24 86l22-28 14 16 12-12 20 24z" fill="' + c + '"/><circle cx="82" cy="38" r="8" fill="#fbbf24"/><path d="M40 94l-8 16M80 94l8 16" stroke="' + D + '" stroke-width="4" stroke-linecap="round"/>'; },
    ruler: function (c) { var t = ''; for (var i = 0; i < 10; i++) { t += '<path d="M' + (28 + i * 7) + ' 36v' + (i % 2 ? 8 : 14) + '" stroke="' + D + '" stroke-width="2"/>'; } return '<g transform="rotate(-25 60 60)"><rect x="14" y="30" width="92" height="30" rx="4" fill="' + c + '"/>' + t + '</g><path d="M30 104V74l30 30z" fill="#fff" stroke="' + D + '" stroke-width="3" stroke-linejoin="round" opacity=".95"/>'; },
    notebook: function (c) { var s = ''; for (var i = 0; i < 6; i++) { s += '<circle cx="34" cy="' + (30 + i * 12) + '" r="3.4" fill="#e2e8f0"/>'; } return '<rect x="30" y="14" width="64" height="92" rx="6" fill="' + c + '"/><rect x="34" y="14" width="2" height="92" fill="#000" opacity=".15"/>' + s + '<rect x="50" y="34" width="34" height="22" rx="3" fill="#fff" opacity=".9"/><path d="M54 66h26M54 74h18" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>'; },
    binder: function (c) { return '<rect x="26" y="10" width="68" height="100" rx="6" fill="' + c + '"/><rect x="26" y="10" width="14" height="100" rx="4" fill="#000" opacity=".18"/><rect x="48" y="24" width="34" height="28" rx="3" fill="#fff" opacity=".92"/><circle cx="60" cy="80" r="9" fill="#e2e8f0"/><circle cx="60" cy="80" r="4" fill="' + c + '"/>'; },
    lock: function (c) { return '<path d="M42 54V40a18 18 0 0136 0v14" fill="none" stroke="#94a3b8" stroke-width="9" stroke-linecap="round"/><rect x="28" y="52" width="64" height="52" rx="10" fill="' + c + '"/><circle cx="60" cy="74" r="7" fill="' + D + '"/><rect x="57" y="76" width="6" height="14" rx="2" fill="' + D + '"/>'; },
    pen: function (c) { return '<g transform="rotate(-40 60 60)"><rect x="52" y="8" width="16" height="78" rx="7" fill="' + c + '"/><rect x="52" y="26" width="16" height="6" fill="#fff" opacity=".45"/><path d="M52 86h16l-8 22z" fill="#cbd5e1"/><path d="M57 98h6l-3 10z" fill="' + D + '"/><rect x="66" y="14" width="4" height="26" rx="2" fill="#94a3b8"/></g>'; },
    highlighter: function (c) { return '<g transform="rotate(-30 60 60)"><rect x="40" y="38" width="40" height="56" rx="8" fill="' + c + '"/><path d="M44 38l6-20h20l6 20z" fill="#fff" opacity=".85"/><rect x="40" y="56" width="40" height="8" fill="#fff" opacity=".35"/></g>'; },
    tape: function (c) { return '<circle cx="60" cy="62" r="40" fill="' + c + '"/><circle cx="60" cy="62" r="17" fill="#fff"/><circle cx="60" cy="62" r="12" fill="#e2e8f0"/><path d="M20 62h-8l8 10" stroke="' + c + '" stroke-width="5" fill="none"/><path d="M36 38l10 10M84 40l-10 10M38 86l10-10" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".5"/>'; },
    scissors: function (c) { return '<g transform="rotate(20 60 60)"><path d="M60 62L40 12M60 62L80 12" stroke="#94a3b8" stroke-width="8" stroke-linecap="round"/><circle cx="46" cy="86" r="14" fill="none" stroke="' + c + '" stroke-width="9"/><circle cx="74" cy="86" r="14" fill="none" stroke="' + c + '" stroke-width="9"/></g>'; }
  };
  function art(type, color, cls) {
    return '<svg viewBox="0 0 120 120" class="' + (cls || 'w-full h-full') + '" aria-hidden="true" focusable="false">' + ART[type](color) + '</svg>';
  }
  function bs(n) { return 'Bs ' + n.toLocaleString('es-BO'); }

  /* ---------- Datos ---------- */
  var NAV = [
    { t: 'Información', sub: ['Quiénes somos', 'Envíos y entregas', 'Formas de pago', 'Sucursales'] },
    { t: 'Novedades', href: '#novedades' },
    { t: 'Ofertas', href: '#ofertas', hot: true },
    { t: 'Marcas', sub: ['Cretacolor', 'Amsterdam', 'Tombow', 'Faber-Castell', 'Ver todas las marcas'] },
    { t: 'Arte & Diseño', sub: ['Pintura acrílica', 'Acuarela', 'Lienzos y bastidores', 'Pinceles'] },
    { t: 'Dibujo & Escritura', sub: ['Lápices y grafitos', 'Marcadores', 'Bolígrafos', 'Tinta y plumines'] },
    { t: 'Escolar', sub: ['Cuadernos', 'Mochilas', 'Estuches', 'Material de aula'] },
    { t: 'Papelería', sub: ['Carpetas y archivadores', 'Papel y cartulinas', 'Adhesivos y cintas', 'Agendas'] },
    { t: 'Oficina', sub: ['Archivo', 'Escritorio', 'Seguridad y candados', 'Etiquetas'] },
    { t: 'Manualidades', sub: ['Corte y pegado', 'Foami y fieltro', 'Cuentas y abalorios', 'Decoración'] }
  ];
  var CATS = [
    { n: 'Arte & Diseño', k: '320 productos', bg: '#e8edff', fg: '#1e3a8a', t: 'canvas', c: '#2563eb' },
    { n: 'Dibujo & Escritura', k: '540 productos', bg: '#fff1de', fg: '#9a3412', t: 'pencil', c: '#f59e0b' },
    { n: 'Escolar', k: '410 productos', bg: '#dcf7ea', fg: '#065f46', t: 'notebook', c: '#0f9d6a' },
    { n: 'Papelería', k: '275 productos', bg: '#fde4f0', fg: '#9d174d', t: 'tape', c: '#ec4899' },
    { n: 'Oficina', k: '360 productos', bg: '#e6ebf3', fg: '#0b1d3a', t: 'binder', c: '#0b1d3a' },
    { n: 'Manualidades', k: '230 productos', bg: '#fdf5c9', fg: '#854d0e', t: 'scissors', c: '#d41f3c' }
  ];
  var SALE = [
    { n: 'Marcadores ABT Pro x12', t: 'marker', c: '#e11d48', p: 189, o: 379 },
    { n: 'Lápices CRETACOLOR x24', t: 'pencil', c: '#f59e0b', p: 149, o: 298 },
    { n: 'Pinturas AMSTERDAM acrílicas x12', t: 'paint', c: '#2563eb', p: 259, o: 432 },
    { n: 'Set de pinceles sintéticos x10', t: 'brush', c: '#7c3aed', p: 79, o: 113 },
    { n: 'Lienzo entelado 30×40 cm', t: 'canvas', c: '#0d9488', p: 45, o: 90 },
    { n: 'Escuadras y regla técnica', t: 'ruler', c: '#0ea5e9', p: 35, o: 58 },
    { n: 'Rotuladores doble punta x36', t: 'marker', c: '#0f9d6a', p: 129, o: 258 },
    { n: 'Acuarelas en pastilla x24', t: 'paint', c: '#ec4899', p: 119, o: 198 },
    { n: 'Estuche de lápices de color x48', t: 'pencil', c: '#ef4444', p: 219, o: 438 }
  ];
  var NEWS = [
    { n: 'Cuaderno universitario 100 hojas', t: 'notebook', c: '#2563eb', p: 18, b: 'new' },
    { n: 'Archivador de palanca A4', t: 'binder', c: '#0b1d3a', p: 32, o: 36, b: 'pct' },
    { n: 'Candado de seguridad 40 mm', t: 'lock', c: '#f59e0b', p: 25, b: 'new2' },
    { n: 'Bolígrafos de gel x10', t: 'pen', c: '#7c3aed', p: 28, o: 31, b: 'pct' },
    { n: 'Resaltadores pastel x6', t: 'highlighter', c: '#f472b6', p: 22, b: 'new' },
    { n: 'Cinta washi x8 rollos', t: 'tape', c: '#14b8a6', p: 24, b: 'new2' },
    { n: 'Agenda 2027 semanal', t: 'notebook', c: '#d41f3c', p: 54, b: 'new' },
    { n: 'Carpeta con elástico A4', t: 'binder', c: '#0d9488', p: 14, o: 16, b: 'pct' }
  ];

  /* ---------- Navegación ---------- */
  var nav = document.getElementById('navList');
  nav.innerHTML = NAV.map(function (it) {
    var base = 'btn w-full lg:w-auto flex items-center justify-between gap-1 px-3 py-3 lg:py-3.5 text-sm font-semibold text-white hover:bg-white/10 lg:rounded-md';
    if (!it.sub) {
      return '<li class="nav-item"><a href="' + it.href + '" class="' + base + (it.hot ? ' text-red-300' : '') + '">' + (it.hot ? '<span class="h-2 w-2 rounded-full bg-crimson mr-1.5"></span>' : '') + it.t + '</a></li>';
    }
    return '<li class="nav-item lg:relative"><button type="button" class="' + base + '" aria-expanded="false">' + it.t +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>' +
      '<ul class="sub pl-3 pb-2 lg:pl-2 lg:pb-2">' + it.sub.map(function (s) {
        return '<li><a href="#" class="block rounded-md px-3 py-2 text-sm text-sky-100 lg:text-slate-700 hover:bg-white/10 lg:hover:bg-slate-100">' + s + '</a></li>';
      }).join('') + '</ul></li>';
  }).join('');
  nav.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    var li = b.parentElement, was = li.classList.contains('open');
    nav.querySelectorAll('.nav-item.open').forEach(function (x) { x.classList.remove('open'); x.querySelector('button').setAttribute('aria-expanded', 'false'); });
    if (!was) { li.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('#navList')) nav.querySelectorAll('.nav-item.open').forEach(function (x) { x.classList.remove('open'); });
  });
  var burger = document.getElementById('burger'), menu = document.getElementById('menu');
  burger.addEventListener('click', function () {
    var hidden = menu.classList.toggle('hidden');
    burger.setAttribute('aria-expanded', String(!hidden));
  });

  /* ---------- Categorías ---------- */
  document.getElementById('catGrid').innerHTML = CATS.map(function (c) {
    return '<a href="#" class="lift group relative overflow-hidden rounded-2xl p-4 sm:p-6 min-h-[150px] sm:min-h-[190px] flex flex-col justify-between" style="background:' + c.bg + ';color:' + c.fg + '">' +
      '<span class="absolute -right-3 -bottom-3 sm:right-2 sm:bottom-0 h-24 w-24 sm:h-36 sm:w-36 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">' + art(c.t, c.c) + '</span>' +
      '<span class="relative text-[11px] font-bold uppercase tracking-[.16em] opacity-70">' + c.k + '</span>' +
      '<span class="relative text-xl sm:text-2xl font-extrabold leading-tight max-w-[10ch] sm:max-w-[12ch]">' + c.n + '</span>' +
      '</a>';
  }).join('');

  /* ---------- Ofertas ---------- */
  document.getElementById('saleGrid').innerHTML = SALE.map(function (p) {
    var pct = Math.round((1 - p.p / p.o) * 100);
    return '<article class="sale-card lift group bg-white text-slate-800 rounded-2xl overflow-hidden flex flex-col" data-name="' + p.n.toLowerCase() + '">' +
      '<div class="relative bg-slate-100 aspect-[4/3] p-6 sm:p-8">' +
        '<span class="absolute top-3 left-3 z-10 inline-flex rounded-md overflow-hidden text-[11px] font-extrabold tracking-wide shadow-lg"><span class="bg-black text-white px-2 py-1">BLACK FRIDAY</span><span class="bg-crimson text-white px-2 py-1 num">−' + pct + '% OFF</span></span>' +
        '<div class="h-full w-full transition-transform duration-300 group-hover:scale-105">' + art(p.t, p.c) + '</div>' +
      '</div>' +
      '<div class="p-4 sm:p-5 flex flex-col gap-3 flex-1">' +
        '<h3 class="font-bold text-navy leading-snug">' + p.n + '</h3>' +
        '<div class="flex items-baseline gap-2 mt-auto"><span class="num text-2xl font-extrabold text-crimson">' + bs(p.p) + '</span><span class="num text-sm text-slate-400 line-through">' + bs(p.o) + '</span></div>' +
        '<button type="button" data-add="' + p.n + '" class="btn h-11 rounded-lg bg-navy text-white font-semibold hover:bg-navy2">Agregar al carrito</button>' +
      '</div></article>';
  }).join('');

  /* ---------- Novedades ---------- */
  var BADGE = {
    new: ['bg-sky-600', 'Nuevo'],
    new2: ['bg-orange-500', 'Nuevo'],
    pct: ['bg-crimson', null]
  };
  document.getElementById('carousel').innerHTML = NEWS.map(function (p) {
    var bd = BADGE[p.b], label = bd[1] || ('−' + Math.round((1 - p.p / p.o) * 100) + '%');
    return '<article class="new-card lift group snap-start shrink-0 w-[72%] sm:w-[42%] md:w-[30%] lg:w-[23%] bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col" data-name="' + p.n.toLowerCase() + '">' +
      '<div class="relative bg-slate-100 aspect-square p-8">' +
        '<span class="absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white ' + bd[0] + '">' + label + '</span>' +
        '<div class="h-full w-full transition-transform duration-300 group-hover:scale-105">' + art(p.t, p.c) + '</div>' +
      '</div>' +
      '<div class="p-4 flex flex-col gap-3 flex-1">' +
        '<h3 class="font-semibold text-navy leading-snug">' + p.n + '</h3>' +
        '<div class="flex items-baseline gap-2 mt-auto"><span class="num text-xl font-extrabold text-navy">' + bs(p.p) + '</span>' + (p.o ? '<span class="num text-sm text-slate-400 line-through">' + bs(p.o) + '</span>' : '') + '</div>' +
        '<button type="button" data-add="' + p.n + '" class="btn h-10 rounded-lg border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-white">Agregar</button>' +
      '</div></article>';
  }).join('');
  var car = document.getElementById('carousel');
  function step() { return Math.max(car.clientWidth * 0.8, 240); }
  document.getElementById('prev').addEventListener('click', function () { car.scrollBy({ left: -step(), behavior: 'smooth' }); });
  document.getElementById('next').addEventListener('click', function () { car.scrollBy({ left: step(), behavior: 'smooth' }); });

  /* ---------- Carrito y aviso ---------- */
  
var carrito = [];

try {
  var carritoGuardado = JSON.parse(
    localStorage.getItem('carritoTrazo') || '[]'
  );

  if (Array.isArray(carritoGuardado)) {
    carrito = carritoGuardado.filter(function (producto) {
      return producto &&
        typeof producto.nombre === 'string' &&
        typeof producto.precio === 'number' &&
        Number.isFinite(producto.precio) &&
        producto.precio >= 0 &&
        Number.isInteger(producto.cantidad) &&
        producto.cantidad > 0 &&
producto.cantidad <= 50;
    });
  }
} catch (error) {
  carrito = [];
}
var unidadesRecuperadas = 0;

carrito = carrito.filter(function (producto) {
  if (unidadesRecuperadas + producto.cantidad > 50) {
    return false;
  }

  unidadesRecuperadas += producto.cantidad;
  return true;
});


/* ---------- Mostrar productos del carrito ---------- */

function mostrarCarrito() {
  var lista = document.getElementById('listaCarrito');
  var total = document.getElementById('totalCarrito');

  lista.innerHTML = '';

  if (carrito.length === 0) {
    lista.innerHTML = `
      <p class="text-center text-slate-500 py-8">
        Tu carrito está vacío.
      </p>
    `;
    total.textContent = 'Bs 0';
    return;
  }

  var subtotal = 0;

  carrito.forEach(function (producto) {
    var importe = producto.precio * producto.cantidad;
    subtotal += importe;

    var fila = document.createElement('div');
    fila.className =
      'flex items-center justify-between gap-3 border-b border-slate-200 pb-4';

    var informacion = document.createElement('div');
    informacion.className = 'flex-1 min-w-0';

    var nombre = document.createElement('p');
    nombre.className = 'font-semibold text-slate-800';
    nombre.textContent = producto.nombre;

    var detalle = document.createElement('p');
    detalle.className = 'text-sm text-slate-500 mt-1';
    detalle.textContent =
      'Bs ' + producto.precio + ' × ' + producto.cantidad;

    var precio = document.createElement('span');
    precio.className = 'font-bold text-[#0B1D3A] whitespace-nowrap';
    precio.textContent = 'Bs ' + importe;


informacion.appendChild(nombre);
informacion.appendChild(detalle);

// Controles de cantidad
var controles = document.createElement('div');
controles.className = 'flex items-center gap-2 mt-3';

var disminuir = document.createElement('button');
disminuir.type = 'button';
disminuir.textContent = '−';
disminuir.className =
  'w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold';

var cantidad = document.createElement('span');
cantidad.className = 'font-semibold min-w-6 text-center';
cantidad.textContent = producto.cantidad;

var aumentar = document.createElement('button');
aumentar.type = 'button';
aumentar.textContent = '+';
aumentar.className =
  'w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 font-bold';

var eliminar = document.createElement('button');
eliminar.type = 'button';
eliminar.textContent = 'Eliminar';
eliminar.className =
  'text-sm text-red-600 hover:underline ml-2';

// Aumentar cantidad
aumentar.addEventListener('click', function () {
  if (pedidoEnProceso) return;

  var cantidadTotal = carrito.reduce(function (total, p) {
    return total + p.cantidad;
  }, 0);

  if (cantidadTotal >= 50) {
    say('El máximo es 50 unidades por pedido.');
    return;
  }

  producto.cantidad++;
  actualizarCarrito();
});

// Disminuir cantidad
disminuir.addEventListener('click', function () {
  producto.cantidad--;

  if (producto.cantidad <= 0) {
    carrito = carrito.filter(function (p) {
      return p !== producto;
    });
  }

  actualizarCarrito();
});
if (pedidoEnProceso) return;

// Eliminar producto
eliminar.addEventListener('click', function () {
  carrito = carrito.filter(function (p) {
    return p !== producto;
  });

  actualizarCarrito();
});
if (pedidoEnProceso) return;

controles.appendChild(disminuir);
controles.appendChild(cantidad);
controles.appendChild(aumentar);
controles.appendChild(eliminar);

informacion.appendChild(controles);

fila.appendChild(informacion);
fila.appendChild(precio);
lista.appendChild(fila);

});

  total.textContent = 'Bs ' + subtotal;
}

/* ---------- Actualizar carrito ---------- */

function actualizarCarrito() {
  if (pedidoEnProceso) return;

  clavePedidoActual = null;
  count = carrito.reduce(function (total, producto) {
    return total + producto.cantidad;
  }, 0);

  document.getElementById('cartCount').textContent = count;

  localStorage.setItem('carritoTrazo', JSON.stringify(carrito));

  mostrarCarrito();
}


  var count = 0, toast = document.getElementById('toast'), tt;

count = carrito.reduce(function (total, producto) {
  return total + producto.cantidad;
}, 0);

document.getElementById('cartCount').textContent = count;

  function say(msg) {
    toast.textContent = msg;
    toast.classList.remove('opacity-0', 'translate-y-2');
    clearTimeout(tt);
    tt = setTimeout(function () { toast.classList.add('opacity-0', 'translate-y-2'); }, 1800);
  }
  
document.addEventListener('click', function (e) {
  var b = e.target.closest('[data-add]');
  if (!b) return;

  if (pedidoEnProceso) {
  say('Espera a que termine la confirmación del pedido.');
  return;
}
clavePedidoActual = null;

  var nombre = b.getAttribute('data-add');

  var producto = SALE.concat(NEWS).find(function (p) {
    return p.n === nombre;
  });

  if (!producto) return;

  var cantidadTotal = carrito.reduce(function (total, p) {
  return total + p.cantidad;
}, 0);

if (cantidadTotal >= 50) {
  say('El máximo es 50 unidades por pedido.');
  return;
}

  var existente = carrito.find(function (p) {
    return p.nombre === nombre;
  });

  if (existente) {
    existente.cantidad++;
  } else {
    carrito.push({
      nombre: producto.n,
      precio: producto.p,
      cantidad: 1
    });
  }

  count++;
  document.getElementById('cartCount').textContent = count;

  
localStorage.setItem('carritoTrazo', JSON.stringify(carrito));

say('Agregado: ' + nombre);
console.log('Carrito Trazo:', carrito);

});

  
/* ---------- Abrir y cerrar carrito ---------- */

var panelCarrito = document.getElementById('panelCarrito');
var cerrarCarrito = document.getElementById('cerrarCarrito');

document.getElementById('cartBtn').addEventListener('click', function () {
  mostrarCarrito();

  panelCarrito.classList.remove('hidden');
  panelCarrito.classList.add('flex');
});

cerrarCarrito.addEventListener('click', function () {
  panelCarrito.classList.add('hidden');
  panelCarrito.classList.remove('flex');
});

/* ---------- Continuar con la compra ---------- */


/* ---------- Continuar con la compra ---------- */

var panelCompra = document.getElementById('panelCompra');
var cerrarCompra = document.getElementById('cerrarCompra');

document.getElementById('finalizarCompra').addEventListener('click', function () {  
  if (pedidoEnProceso) return;

  if (carrito.length === 0) {
    say('Agrega productos antes de continuar con tu compra');
    return;
  }

  var subtotal = carrito.reduce(function (total, producto) {
    return total + producto.precio * producto.cantidad;
  }, 0);

  document.getElementById('totalCompra').textContent = bs(subtotal);

  // Cerrar carrito
  panelCarrito.classList.add('hidden');
  panelCarrito.classList.remove('flex');

  // Abrir formulario de compra
  panelCompra.classList.remove('hidden');
  panelCompra.classList.add('flex');

});

// Cerrar formulario de compra
cerrarCompra.addEventListener('click', function () {
  panelCompra.classList.add('hidden');
  panelCompra.classList.remove('flex');
});

/* ---------- Revisión del pedido ---------- */

var panelRevision = document.getElementById('panelRevision');
var cerrarRevision = document.getElementById('cerrarRevision');
var volverCompra = document.getElementById('volverCompra');

document.getElementById('formularioCompra').addEventListener('submit', function (e) {
  e.preventDefault();
  if (pedidoEnProceso) return;

  if (carrito.length === 0) {
    say('Tu carrito está vacío');
    return;
  }

  // Obtener los datos del cliente
  var nombre = document.getElementById('nombreCliente').value.trim();
  var telefono = document.getElementById('telefonoCliente').value.trim();
  var direccion = document.getElementById('direccionCliente').value.trim();
  var nota = document.getElementById('notaCliente').value.trim();

  if (!nombre || !telefono || !direccion) {
    say('Completa los datos obligatorios');
    return;
  }

  // Mostrar los datos de entrega
  var resumenCliente = document.getElementById('resumenCliente');
  resumenCliente.replaceChildren();

  [
    ['Nombre', nombre],
    ['Teléfono', telefono],
    ['Dirección', direccion],
    ['Indicaciones', nota || 'Ninguna']
  ].forEach(function (dato) {
    var linea = document.createElement('p');

    var etiqueta = document.createElement('strong');
    etiqueta.textContent = dato[0] + ': ';

    linea.appendChild(etiqueta);
    linea.appendChild(document.createTextNode(dato[1]));
    resumenCliente.appendChild(linea);
  });

  // Mostrar los productos
  var resumenProductos = document.getElementById('resumenProductos');
  resumenProductos.replaceChildren();

  var subtotal = 0;

  carrito.forEach(function (producto) {
    var importe = producto.precio * producto.cantidad;
    subtotal += importe;

    var fila = document.createElement('div');
    fila.className = 'flex justify-between gap-3 border-b pb-3';

    var descripcion = document.createElement('span');
    descripcion.className = 'text-sm';
    descripcion.textContent =
      producto.nombre + ' (' + producto.cantidad + ' × ' + bs(producto.precio) + ')';

    var precio = document.createElement('strong');
    precio.className = 'whitespace-nowrap';
    precio.textContent = bs(importe);

    fila.appendChild(descripcion);
    fila.appendChild(precio);
    resumenProductos.appendChild(fila);
  });

  document.getElementById('totalRevision').textContent = bs(subtotal);

  // Cerrar formulario
  panelCompra.classList.add('hidden');
  panelCompra.classList.remove('flex');

  // Abrir revisión
  panelRevision.classList.remove('hidden');
  panelRevision.classList.add('flex');
});

// Volver para editar los datos
volverCompra.addEventListener('click', function () {
  if (pedidoEnProceso) return;
  panelRevision.classList.add('hidden');
  panelRevision.classList.remove('flex');

  panelCompra.classList.remove('hidden');
  panelCompra.classList.add('flex');
});

// Cerrar revisión
cerrarRevision.addEventListener('click', function () {
  if (pedidoEnProceso) return;
  panelRevision.classList.add('hidden');
  panelRevision.classList.remove('flex');
});


/* ---------- Confirmación de pedido (prueba) ---------- */
var pedidoEnProceso = false;
var clavePedidoActual = null;

['nombreCliente', 'telefonoCliente', 'direccionCliente', 'notaCliente']
  .forEach(function (id) {
    var campo = document.getElementById(id);

    campo.addEventListener('input', function () {
      if (pedidoEnProceso) return;
      clavePedidoActual = null;
    });
  });

document.getElementById('confirmarPedido').addEventListener('click', async function () {
  say('Los pedidos estarán disponibles próximamente.');
return;
  if (pedidoEnProceso) return;
  pedidoEnProceso = true;
  ['nombreCliente', 'telefonoCliente', 'direccionCliente', 'notaCliente']
  .forEach(function (id) {
    document.getElementById(id).disabled = true;
  });

  if (carrito.length === 0) {
  pedidoEnProceso = false;

  ['nombreCliente', 'telefonoCliente', 'direccionCliente', 'notaCliente']
    .forEach(function (id) {
      document.getElementById(id).disabled = false;
    });

  say('No hay productos para confirmar');
  return;
}

var totalUnidades = carrito.reduce(function (total, producto) {
  return total + producto.cantidad;
}, 0);

if (totalUnidades > 50) {
  pedidoEnProceso = false;

  ['nombreCliente', 'telefonoCliente', 'direccionCliente', 'notaCliente']
    .forEach(function (id) {
      document.getElementById(id).disabled = false;
    });

  say('El máximo es 50 unidades por pedido.');
  return;
}

  if (!clavePedidoActual) {
  clavePedidoActual = crypto.randomUUID();
}

let session = null;
let errorSesion = null;

if (!window.supabaseClient) {
  pedidoEnProceso = false;

  ['nombreCliente', 'telefonoCliente', 'direccionCliente', 'notaCliente']
    .forEach(function (id) {
      document.getElementById(id).disabled = false;
    });

  say('No se pudo conectar con Supabase.');
  return;
}

try {
  const resultado = await window.supabaseClient.auth.getSession();
  session = resultado.data.session;
  errorSesion = resultado.error;
} catch (error) {
  errorSesion = error;
}

if (errorSesion || !session) {
  pedidoEnProceso = false;

  ['nombreCliente', 'telefonoCliente', 'direccionCliente', 'notaCliente']
    .forEach(function (id) {
      document.getElementById(id).disabled = false;
    });

  say('Debes iniciar sesión para confirmar tu pedido.');
  return;
}

  var subtotal = carrito.reduce(function (total, producto) {
    return total + producto.precio * producto.cantidad;
  }, 0);

  var pedido = {
    cliente: {
      nombre: document.getElementById('nombreCliente').value.trim(),
      telefono: document.getElementById('telefonoCliente').value.trim(),
      direccion: document.getElementById('direccionCliente').value.trim(),
      nota: document.getElementById('notaCliente').value.trim()
    },
    productos: carrito.map(function (producto) {
      return {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: producto.cantidad
      };
    }),
    subtotal: subtotal,
    fecha: new Date().toISOString()
  };

  // Solo para pruebas: no se envía a ningún servidor

try {
  const { data, error } = await window.supabaseClient.functions.invoke(
    'crear-pedido',
    {
        body: {
          idempotency_key: clavePedidoActual,
  cliente: pedido.cliente,
  productos: pedido.productos.flatMap(function (producto) {
    return Array(producto.cantidad).fill(producto.nombre);
  })
}

    }
  );

  if (error) throw error;

  console.log('Respuesta de Supabase:', data);
  if (!data || data.ok !== true || !data.pedido_id) {
  throw new Error('Supabase no confirmó que el pedido se haya guardado');
}

} catch (error) {
  console.error('Error conectando con Supabase:', error);
  pedidoEnProceso = false;

  ['nombreCliente', 'telefonoCliente', 'direccionCliente', 'notaCliente']
  .forEach(function (id) {
    document.getElementById(id).disabled = false;
  });

  say('No pudimos confirmar tu pedido. Revisa tu cuenta y el estado del pedido antes de volver a intentarlo.');
  return;
}

  pedidoEnProceso = false;
clavePedidoActual = null;

['nombreCliente', 'telefonoCliente', 'direccionCliente', 'notaCliente']
  .forEach(function (id) {
    document.getElementById(id).disabled = false;
  });

say('¡Tu pedido se registró correctamente!');

  carrito = [];
actualizarCarrito();

  panelRevision.classList.add('hidden');
  panelRevision.classList.remove('flex');
});

  /* ---------- Búsqueda en vivo ---------- */
  function filter(v) {
    v = v.trim().toLowerCase();
    var vis = { '.sale-card': 0, '.new-card': 0 };
    Object.keys(vis).forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        var ok = !v || el.getAttribute('data-name').indexOf(v) !== -1;
        el.hidden = !ok;
        if (ok) vis[sel]++;
      });
    });
    document.getElementById('saleEmpty').hidden = vis['.sale-card'] > 0;
    document.getElementById('newEmpty').hidden = vis['.new-card'] > 0;
  }
  var q1 = document.getElementById('q1'), q2 = document.getElementById('q2');
  [q1, q2].forEach(function (q) {
    q.addEventListener('input', function () { q1.value = q.value; q2.value = q.value; filter(q.value); });
  });
  [document.getElementById('searchDesktop'), document.getElementById('searchMobile')].forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      filter(q1.value);
      document.getElementById('ofertas').scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- Cuenta regresiva (27 de noviembre de 2026, 23:59:59 hora local) ---------- */
  var END = new Date(2026, 10, 27, 23, 59, 59).getTime();
  var cd = document.getElementById('countdown');
  var UNITS = ['Semanas', 'Días', 'Horas', 'Min', 'Seg'];
  cd.innerHTML = UNITS.map(function (u, i) {
    return '<div class="rounded-xl bg-white/10 border border-white/15 px-1 py-3 sm:px-4 sm:py-4 text-center min-w-0">' +
      '<div class="num text-2xl sm:text-4xl font-extrabold leading-none" data-u="' + i + '">00</div>' +
      '<div class="mt-1.5 text-[10px] sm:text-xs uppercase tracking-wider text-slate-300">' + u + '</div></div>';
  }).join('');
  var cells = cd.querySelectorAll('[data-u]');
  function tick() {
    var s = Math.max(0, Math.floor((END - Date.now()) / 1000));
    var w = Math.floor(s / 604800); s -= w * 604800;
    var d = Math.floor(s / 86400); s -= d * 86400;
    var h = Math.floor(s / 3600); s -= h * 3600;
    var m = Math.floor(s / 60); s -= m * 60;
    [w, d, h, m, s].forEach(function (v, i) { cells[i].textContent = String(v).padStart(2, '0'); });
  }
  tick();
  setInterval(tick, 1000);
})();