import { createClient } from '@supabase/supabase-js'

type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

type GenericRow = Record<string, Json | undefined>

export type Database = {
  public: {
    Tables: {
      [key: string]: {
        Row: GenericRow
        Insert: Record<string, Json | undefined>
        Update: Record<string, Json | undefined>
      }
      profiles: {
        Row: {
          id: string
          user_id?: string
          role: 'candidate' | 'employer' | 'admin'
          email?: string
          full_name?: string
          company_name?: string
          industry?: string
          location?: string
          experience_years?: number
          skills?: string[]
          bio?: string
          phone?: string
          created_at?: string
          updated_at?: string
        }
        Insert: Record<string, Json | undefined>
        Update: Record<string, Json | undefined>
      }
      jobs: {
        Row: {
          id: string
          employer_id: string
          title: string
          description: string
          location: string
          employment_type: string
          experience_level?: string
          category: string
          required_skills?: string[]
          salary_min?: number
          salary_max?: number
          posted_date: string
          deadline?: string
          applications_count: number
          views_count?: number
          status?: string
          created_at?: string
          updated_at?: string
        }
        Insert: Record<string, Json | undefined>
        Update: Record<string, Json | undefined>
      }
      job_applications: {
        Row: {
          id: string
          job_id: string
          candidate_id: string
          status: string
          cover_letter?: string
          applied_date: string
          created_at?: string
          updated_at?: string
        }
        Insert: Record<string, Json | undefined>
        Update: Record<string, Json | undefined>
      }
      contact_leads: {
        Row: {
          id: string
          name: string
          email: string
          phone?: string
          company?: string
          message: string
          inquiry_type: 'job_inquiry' | 'partnership' | 'staffing' | 'general'
          status?: string
          created_at?: string
        }
        Insert: Record<string, Json | undefined>
        Update: Record<string, Json | undefined>
      }
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'public-anon-key'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

