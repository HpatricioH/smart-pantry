import { House } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { ChefHat } from 'lucide-react';


export function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0'>
      <div className='flex justify-around items-center p-4'>
        <div className='flex flex-col items-center'>
          <House />
          <p>Home</p>
        </div>
        <div className='flex flex-col items-center'>
          <Plus />
          <p>Add</p>
        </div>
        <div className='flex flex-col items-center'>
          <ArrowDown />
          <p>Pantry</p>
        </div>
        <div className='flex flex-col items-center'>
          <ChefHat />
          <p>Recipes</p>
        </div>
      </div>
    </footer>
  )
}