'use client'

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function HeaderPantry() {
  const router = useRouter()

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-light-bg text-text-secondary backdrop-blur-[6px] transition-transform z-40"
        style={{ position: 'fixed', top: 0, width: '100%' }}>
        <button
          onClick={() => router.back()}
          type='button'
          className='cursor-pointer'
        >
          <ArrowLeft className='hover:stroke-chart-2' />
        </button>
        <div
          className='flex-1 text-center'
        >
          Smart Pantry
        </div>
      </nav>
    </header>
  )
}