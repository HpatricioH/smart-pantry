import { ChevronRight } from 'lucide-react';

export function CurrentStock() {
  return (
    <section>
      <div className="flex justify-between items-baseline">
        <h2 className='text-xl font-semibold tracking-tight'>Current Stock</h2>
        <ChevronRight className='self-center text-secondary' />
      </div>
    </section>
  )
}