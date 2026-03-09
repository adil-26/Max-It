'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/header'
import { useAuth } from '@/lib/auth-context'

export default function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/login')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <>
        <Header />
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <p className="text-text-secondary">Loading...</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-muted/30">{children}</main>
    </>
  )
}
