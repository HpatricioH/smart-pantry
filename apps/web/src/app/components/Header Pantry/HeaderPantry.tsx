import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function HeaderPantry() {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-light-bg text-text-secondary"
        style={{ position: 'fixed', top: 0, width: '100%' }}>
        <Link
          href="/"
        >
          <ArrowLeft />
        </Link>
        <h2 className='flex-1 text-center'>Smart Pantry</h2>
      </nav>
    </header>
  )
}