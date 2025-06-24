import { House } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { ChefHat } from 'lucide-react';


export function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0'>
      <div className='flex justify-around items-center p-4'>
        <div className='flex flex-col items-center'>
          <div className='size-11 flex items-center justify-center bg-nav-home rounded-[35%] text-white mb-1'>
            <House className='stroke-3' />
          </div>
          <p>Home</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='size-11 flex items-center justify-center bg-nav-add rounded-[35%] text-white mb-1'>
            <Plus className='stroke-3' />
          </div>
          <p>Add</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='size-11 flex items-center justify-center bg-nav-pantry rounded-[35%] text-white mb-1'>
            <ArrowDown className='stroke-3' />
          </div>
          <p>Pantry</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='size-11 flex items-center justify-center bg-nav-recipes rounded-[35%] text-white mb-1'>
            <ChefHat className='stroke-3' />
          </div>
          <p>Recipes</p>
        </div>
      </div>
    </footer>
  )
}