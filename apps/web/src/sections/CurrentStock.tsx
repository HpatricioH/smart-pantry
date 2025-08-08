import { ChevronRight } from 'lucide-react';
import { CurrentStockCards } from '../app/components/Current Stock Cards/CurrentStockCards';
import Link from 'next/link';

export function CurrentStock() {
  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2 className='text-xl font-semibold tracking-tight pb-2'>
          Current Stock
        </h2>
        <Link
          href={"/categories"}
        >
          <ChevronRight className='self-center text-text-secondary' />
        </Link>
      </div>
      <CurrentStockCards />
    </section>
  )
}