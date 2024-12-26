'use client';
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const BackButtton = () => {
    const router = useRouter();
  return (
    <button className='btn' onClick={() => router.back()}>
      <ChevronLeft />  back
    </button>
  )
}

export default BackButtton