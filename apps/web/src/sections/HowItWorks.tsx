import { ScanBarcode } from 'lucide-react';
import { NotebookText } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

// TODO: separate this in cards
export function HowItWorks() {
  return (
    <section className="relative z-20 mx-auto w-full max-w-6xl px-6">
      <h2 className="font-bold text-3xl tracking-tight text-text-primary text-center">How It Works</h2>

      <div className='grid gap-6 p-4 sm:p-10
        sm:grid-cols-2 lg:grid-cols-3
        [grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))]'>

        <article>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center rounded-lg bg-[#DDECFF]/50 p-2'>
              <ScanBarcode className='stroke-text-primary fill-white self-center' />
            </div>
            <div>
              <h3 className="text-text-primary font-semibold">Scan Items</h3>
              <p className='text-sm'>Use your phone camera to scan the barcode</p>
            </div>
          </div>
        </article>

        <article>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center rounded-lg bg-[#DDECFF]/50 p-2'>
              <NotebookText className='stroke-text-primary fill-white ' />
            </div>
            <div>
              <h3 className="text-text-primary font-semibold">Track inventory </h3>
              <p className='text-sm'>Smart Pantry organize your stock</p>
            </div>
          </div>
        </article>

        <article>
          <div className='flex gap-2'>
            <div className='flex justify-center items-center rounded-lg bg-[#DDECFF]/50 p-2'>
              <Lightbulb className='stroke-text-primary fill-white ' />
            </div>
            <div>
              <h3 className="text-text-primary font-semibold">Cook smarter</h3>
              <p className='text-sm'>AI suggest recipes</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}