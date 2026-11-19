import { supabase } from './supabase.js'

// Registrar una cuenta nueva
export async function registrar(nombre, correo, contrasena) {
  return await supabase.auth.signUp({
    email: correo.trim(),
    password: contrasena,
    options: {
      data: { full_name: nombre.trim() },
      emailRedirectTo: window.location.origin
    }
  })
}

// Iniciar sesión
export async function iniciarSesion(correo, contrasena) {
  return await supabase.auth.signInWithPassword({
    email: correo.trim(),
    password: contrasena
  })
}

// Recuperar contraseña
export async function recuperarContrasena(correo) {
  return await supabase.auth.resetPasswordForEmail(
    correo.trim(),
    {
      redirectTo: window.location.origin
    }
  )
}

// Cerrar sesión
export async function cerrarSesion() {
  return await supabase.auth.signOut()
}

// Consultar usuario actual
export async function obtenerUsuario() {
  return await supabase.auth.getUser()
}

export async function actualizarPerfil(nombre, telefono) {
  return await supabase.auth.updateUser({
    data: {
      full_name: nombre.trim(),
      telefono: telefono.trim()
    }
  })
}
