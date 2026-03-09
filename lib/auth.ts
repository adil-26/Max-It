import { supabase, type Database } from '@/lib/supabase'

type ProfileUpdate = Partial<Database['public']['Tables']['profiles']['Update']> & {
  full_name?: string
  location?: string
  experience_years?: number
  skills?: string[]
  bio?: string
  phone?: string
}

export async function updateUserProfile(userId: string, updates: ProfileUpdate) {
  const { data, error } = await supabase
    .from('profiles')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId)
    .select('*')
    .single()

  if (error) {
    throw new Error(error.message)
  }

  return data
}

