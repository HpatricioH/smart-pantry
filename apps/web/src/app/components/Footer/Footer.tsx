import { House } from 'lucide-react';
import { Plus } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { ChefHat } from 'lucide-react';
import { footerItems } from '../../lib/data/footerItems';
import Link from 'next/link';


export function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0'>
      <div className='flex justify-around items-center p-4'>
        {
          footerItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.link}
                className='flex flex-col items-center'
              >
                <div className={`size-11 flex items-center justify-center ${item.bgColor} rounded-[35%] text-white mb-1`}>
                  <Icon className='stroke-3' />
                </div>
                <p className='capitalize'>{item.name}</p>
              </Link>
            )
          })
        }
      </div>
    </footer>
  )
}