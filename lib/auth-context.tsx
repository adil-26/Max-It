'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase, type Database } from '@/lib/supabase'

export type Profile = Database['public']['Tables']['profiles']['Row']

type AuthContextValue = {
  user: User | null
  profile: Profile | null
  loading: boolean
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

function useAuthState() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  const loadProfile = useCallback(async (currentUser: User | null) => {
    if (!currentUser) {
      setProfile(null)
      return
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', currentUser.id)
      .single()

    if (error) {
      setProfile(null)
      return
    }

    setProfile(data as Profile)
  }, [])

  useEffect(() => {
    let mounted = true

    const bootstrap = async () => {
      try {
        const {
          data: { user: currentUser },
        } = await supabase.auth.getUser()

        if (!mounted) return
        setUser(currentUser)
        await loadProfile(currentUser)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    bootstrap()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const sessionUser = session?.user ?? null
      setUser(sessionUser)
      await loadProfile(sessionUser)
      setLoading(false)
    })

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [loadProfile])

  const refreshProfile = useCallback(async () => {
    await loadProfile(user)
  }, [loadProfile, user])

  return { user, profile, loading, refreshProfile }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const value = useAuthState()
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context) return context

  return useAuthState()
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }

  return context
}
