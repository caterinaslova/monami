import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function ModificarTurnoFijo() {
    const session = await auth()
    if (!session?.user.id || session?.user.role !== "ADMIN"){
      redirect('/login')
    }
  return (
    <div>ModificarTurnoFijo
        
    </div>
  )
}
