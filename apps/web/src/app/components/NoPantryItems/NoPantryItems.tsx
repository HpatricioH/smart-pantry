import { ShoppingCart } from 'lucide-react';

export function NoPantryItems() {
  return (
    <div className="p-4 gap-16 sm:p-20">
      <div className="flex flex-col justify-center items-center gap-4 mt-12 w-full max-w-7xl mx-auto">
        <ShoppingCart className='size-14 stroke-chart-1' />
        <h2 className='font-bold text-lg'>No items available.</h2>
      </div>
    </div>
  )
}
