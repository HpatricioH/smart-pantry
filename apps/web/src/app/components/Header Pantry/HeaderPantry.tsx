'use client'

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function HeaderPantry() {
  const router = useRouter()

  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-light-bg text-text-secondary"
        style={{ position: 'fixed', top: 0, width: '100%' }}>
        <button
          onClick={() => router.back()}
          type='button'
        >
          <ArrowLeft />
        </button>
        <Link
          href="/"
          className='flex-1 text-center'
        >
          Smart Pantry
        </Link>
      </nav>
    </header>
  )
}