import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function EscuelasPage() {
    const session = await auth()
    if (!session?.user.id || session?.user.role !== "ADMIN"){
      redirect('/login')
    }
  return (
    <div className='flex justify-center items-center text-7xl mt-10'>EscuelasPage</div>
  )
}
