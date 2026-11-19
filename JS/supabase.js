import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('URL de Supabase:', supabaseUrl)
console.log('Clave pública configurada:', Boolean(supabaseKey))

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

// Permitir que tienda.js utilice el cliente de Supabase
window.supabaseClient = supabase;