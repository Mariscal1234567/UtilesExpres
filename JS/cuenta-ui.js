console.log('TRAZO: cuenta-ui.js se está ejecutando')
import { registrar, iniciarSesion, obtenerUsuario, cerrarSesion, actualizarPerfil } from './auth.js'

const ventana = document.getElementById('ventanaCuenta')
const boton = document.getElementById('botonCuenta')
const cerrar = document.getElementById('cerrarCuenta')
const cambiar = document.getElementById('cambiarCuenta')
const formulario = document.getElementById('formularioCuenta')

const titulo = document.getElementById('tituloCuenta')
const descripcion = document.getElementById('descripcionCuenta')
const campoNombre = document.getElementById('campoNombre')
const nombre = document.getElementById('nombreCuenta')
const correo = document.getElementById('correoCuenta')
const clave = document.getElementById('claveCuenta')
const mostrarClave = document.getElementById('mostrarClave')
const enviar = document.getElementById('enviarCuenta')
const mensaje = document.getElementById('mensajeCuenta')

let registrando = false


const menuCuenta = document.getElementById('menuCuenta')
const textoBotonCuenta = document.getElementById('textoBotonCuenta')
const menuNombre = document.getElementById('menuNombre')
const menuCorreo = document.getElementById('menuCorreo')

async function actualizarBotonCuenta() {
  const { data, error } = await obtenerUsuario()

  if (error) {
    console.error('Error al consultar usuario:', error)
    return
  }

  const usuario = data.user

  if (usuario) {
    textoBotonCuenta.textContent = 'Mi cuenta'

    menuNombre.textContent =
      usuario.user_metadata?.full_name || 'Cliente'

    menuCorreo.textContent = usuario.email || ''
  } else {
    textoBotonCuenta.textContent = 'Acceder / Registrarse'
    menuCuenta.classList.add('hidden')
  }
}

actualizarBotonCuenta()


function abrirVentana() {
  ventana.classList.remove('hidden')
  ventana.classList.add('flex')
  correo.focus()
}

function cerrarVentana() {
  ventana.classList.add('hidden')
  ventana.classList.remove('flex')
}

boton.addEventListener('click', async (evento) => {
  evento.preventDefault()

  const { data, error } = await obtenerUsuario()

  if (error) {
    console.error('Error al consultar sesión:', error)
  }

  if (!data?.user) {
    menuCuenta.classList.add('hidden')
    abrirVentana()
    return
  }

  menuNombre.textContent =
    data.user.user_metadata?.full_name || 'Cliente'

  menuCorreo.textContent = data.user.email || ''

  menuCuenta.classList.toggle('hidden')
})

document.addEventListener('click', (evento) => {
  const contenedor = document.getElementById('contenedorCuenta')

  if (!contenedor.contains(evento.target)) {
    menuCuenta.classList.add('hidden')
  }
})

cerrar.addEventListener('click', cerrarVentana)

cambiar.addEventListener('click', () => {
  registrando = !registrando
  formulario.reset()
  mensaje.textContent = ''

  campoNombre.classList.toggle('hidden', !registrando)
  nombre.required = registrando

  titulo.textContent = registrando
    ? 'Crear mi cuenta'
    : 'Entrar a mi cuenta'

  descripcion.textContent = registrando
    ? 'Completa tus datos para crear tu cuenta.'
    : 'Ingresa tus datos para continuar.'

  enviar.textContent = registrando
    ? 'Crear mi cuenta'
    : 'Entrar a mi cuenta'

  cambiar.textContent = registrando
    ? 'Ya tengo una cuenta'
    : '¿Primera vez aquí? Crear una cuenta'

  clave.autocomplete = registrando
    ? 'new-password'
    : 'current-password'
})

mostrarClave.addEventListener('change', () => {
  clave.type = mostrarClave.checked ? 'text' : 'password'
})

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()

  enviar.disabled = true
  mensaje.textContent = 'Por favor, espera...'

  try {
    if (registrando) {
const { error } = await registrar(
  nombre.value.trim(),
  correo.value.trim(),
  clave.value
)

if (error) throw error


      mensaje.textContent =
        'Revisa tu correo para confirmar tu cuenta.'
    } else {
      

console.log('TRAZO: iniciando sesión...')

const { error } = await iniciarSesion(
  correo.value.trim(),
  clave.value
)

console.log('TRAZO: Supabase terminó de responder')

if (error) throw error

mensaje.textContent = '¡Sesión iniciada correctamente!'
cerrarVentana()
window.location.reload()


if (error) throw error

    }
  } catch (error) {
    console.error(error)
    mensaje.textContent =
      'No pudimos completar la solicitud. Revisa tus datos.'
  } finally {
    enviar.disabled = false
  }
})

const opcionCerrarSesion = document.getElementById('opcionCerrarSesion')

opcionCerrarSesion.addEventListener('click', async () => {
  opcionCerrarSesion.disabled = true

  try {
    const { error } = await cerrarSesion()

    if (error) throw error

    menuCuenta.classList.add('hidden')
    await actualizarBotonCuenta()
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
    alert('No se pudo cerrar sesión. Inténtalo nuevamente.')
  } finally {
    opcionCerrarSesion.disabled = false
  }
})

const opcionPerfil = document.getElementById('opcionPerfil')
const panelPerfil = document.getElementById('panelPerfil')
const cerrarPerfil = document.getElementById('cerrarPerfil')

const perfilNombre = document.getElementById('perfilNombre')
const perfilCorreo = document.getElementById('perfilCorreo')
const perfilTelefono = document.getElementById('perfilTelefono')
const mensajePerfil = document.getElementById('mensajePerfil')

opcionPerfil.addEventListener('click', async () => {
  console.log('TRAZO: clic en Mi perfil detectado')

  // Abrir el perfil inmediatamente
  
menuCuenta.classList.add('hidden')
panelPerfil.classList.remove('hidden')

console.log(
  'TRAZO: panel oculto:',
  panelPerfil.classList.contains('hidden')
)

console.log(
  'TRAZO: display del panel:',
  getComputedStyle(panelPerfil).display
)


  mensajePerfil.textContent = 'Cargando tus datos...'

  try {
    const { data, error } = await obtenerUsuario()

    if (error) throw error

    if (!data?.user) {
      panelPerfil.classList.add('hidden')
      abrirVentana()
      return
    }

    const usuario = data.user

    const nombreCompleto =
      usuario.user_metadata?.full_name || 'Cliente'

    perfilNombre.value = nombreCompleto
    perfilCorreo.value = usuario.email || ''
    perfilTelefono.value =
      usuario.user_metadata?.telefono || ''

    document.getElementById('perfilNombreVisible').textContent =
      nombreCompleto

    const iniciales = nombreCompleto
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(palabra => palabra.charAt(0).toUpperCase())
      .join('')

    document.getElementById('perfilAvatar').textContent =
      iniciales || 'TC'

    mensajePerfil.textContent = ''

  } catch (error) {
    console.error('Error al cargar el perfil:', error)
    mensajePerfil.textContent =
      'No se pudieron cargar tus datos. Inténtalo nuevamente.'
  }
})

cerrarPerfil.addEventListener('click', () => {
  panelPerfil.classList.add('hidden')
})

panelPerfil.addEventListener('click', (evento) => {
  if (evento.target === panelPerfil) {
    panelPerfil.classList.add('hidden')
  }
})

const formularioPerfil = document.getElementById('formularioPerfil')
const guardarPerfil = document.getElementById('guardarPerfil')

formularioPerfil.addEventListener('submit', async (evento) => {
  evento.preventDefault()

  guardarPerfil.disabled = true
  guardarPerfil.textContent = 'Guardando...'
  mensajePerfil.textContent = ''

  try {
    const nombreNuevo = perfilNombre.value.trim()
    const telefonoNuevo = perfilTelefono.value.trim()

    if (!nombreNuevo) {
      throw new Error('Debes escribir tu nombre.')
    }

    const { data, error } = await actualizarPerfil(
      nombreNuevo,
      telefonoNuevo
    )

    if (error) throw error

    // Actualizar los datos visibles sin recargar la página
    menuNombre.textContent = nombreNuevo

    document.getElementById('perfilNombreVisible').textContent =
      nombreNuevo

    const iniciales = nombreNuevo
      .split(/\s+/)
      .slice(0, 2)
      .map(palabra => palabra.charAt(0).toUpperCase())
      .join('')

    document.getElementById('perfilAvatar').textContent =
      iniciales || 'TC'

    mensajePerfil.textContent = '¡Cambios guardados correctamente!'
    mensajePerfil.className = 'text-sm font-medium text-green-600'

  } catch (error) {
    console.error('Error al guardar perfil:', error)

    mensajePerfil.textContent =
      'No se pudieron guardar los cambios. Inténtalo nuevamente.'

    mensajePerfil.className = 'text-sm font-medium text-red-600'

  } finally {
    guardarPerfil.disabled = false
    guardarPerfil.textContent = 'Guardar cambios'
  }
})
