'use client'

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function HeaderPantry() {
  const router = useRouter()

  return (
    <header className='relative mx-auto w-full max-w-6xl place-self-center z-40' style={{ position: 'fixed', top: 0 }}>
      <nav className="flex items-center justify-between p-4 bg-light-bg text-text-secondary backdrop-blur-[6px] transition-transform"
      >
        <button
          onClick={() => router.back()}
          type='button'
          className='cursor-pointer'
        >
          <ArrowLeft className='hover:stroke-chart-2' />
        </button>
        <div
          className='text-center place-content-center'
        >
          Smart Pantry
        </div>
      </nav>
    </header>
  )
}