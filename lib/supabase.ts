import { createClient } from '@supabase/supabase-js'

type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          user_id: string | null
          role: 'candidate' | 'employer' | 'admin'
          email: string | null
          full_name: string | null
          company_name: string | null
          industry: string | null
          location: string | null
          experience_years: number | null
          skills: string[] | null
          bio: string | null
          phone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          role: 'candidate' | 'employer' | 'admin'
          email?: string | null
          full_name?: string | null
          company_name?: string | null
          industry?: string | null
          location?: string | null
          experience_years?: number | null
          skills?: string[] | null
          bio?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          role?: 'candidate' | 'employer' | 'admin'
          email?: string | null
          full_name?: string | null
          company_name?: string | null
          industry?: string | null
          location?: string | null
          experience_years?: number | null
          skills?: string[] | null
          bio?: string | null
          phone?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      jobs: {
        Row: {
          id: string
          employer_id: string
          title: string
          description: string
          location: string
          employment_type: string
          experience_level: string | null
          category: string
          required_skills: string[] | null
          salary_min: number | null
          salary_max: number | null
          posted_date: string
          deadline: string | null
          applications_count: number
          views_count: number | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          employer_id: string
          title: string
          description: string
          location: string
          employment_type: string
          experience_level?: string | null
          category: string
          required_skills?: string[] | null
          salary_min?: number | null
          salary_max?: number | null
          posted_date?: string
          deadline?: string | null
          applications_count?: number
          views_count?: number | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          employer_id?: string
          title?: string
          description?: string
          location?: string
          employment_type?: string
          experience_level?: string | null
          category?: string
          required_skills?: string[] | null
          salary_min?: number | null
          salary_max?: number | null
          posted_date?: string
          deadline?: string | null
          applications_count?: number
          views_count?: number | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          id: string
          job_id: string
          candidate_id: string
          status: string
          cover_letter: string | null
          applied_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          job_id: string
          candidate_id: string
          status?: string
          cover_letter?: string | null
          applied_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          job_id?: string
          candidate_id?: string
          status?: string
          cover_letter?: string | null
          applied_date?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      contact_leads: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          company: string | null
          message: string
          inquiry_type: 'job_inquiry' | 'partnership' | 'staffing' | 'general'
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          company?: string | null
          message: string
          inquiry_type?: 'job_inquiry' | 'partnership' | 'staffing' | 'general'
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          company?: string | null
          message?: string
          inquiry_type?: 'job_inquiry' | 'partnership' | 'staffing' | 'general'
          status?: string
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_applications_count: {
        Args: {
          job_id: string
        }
        Returns: unknown
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://example.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'public-anon-key'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
