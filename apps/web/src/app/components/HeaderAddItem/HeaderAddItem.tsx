import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

export function HeaderAddItem() {
  return (
    <header>
      <nav className="flex items-center justify-between p-4 bg-light-bg text-text-secondary"
        style={{ position: 'fixed', top: 0, width: '100%' }}>
        <Link
          href="/pantry"
        >
          <ArrowLeft />
        </Link>
        <Link
          href="/"
          className='flex-1 text-end'
        >
          Cancel
        </Link>
      </nav>
    </header>
  )
}
