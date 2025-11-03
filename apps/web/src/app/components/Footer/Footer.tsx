import { footerItems } from '../../lib/data/footerItems';
import Link from 'next/link';
import { DrawerAddItem } from '../DrawerAddItem/DrawerAddItem';


export function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0 backdrop-blur-[6px] transition-transform z-50'>
      <div className='flex justify-around items-center p-4'>
        {
          footerItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.link}
                className='flex flex-col items-center hover:text-chart-2'
              >
                <div className={`size-11 flex items-center justify-center ${item.bgColor} rounded-[35%] text-white mb-1`}>
                  <Icon className='stroke-3' />
                </div>
                <p className='capitalize'>{item.name}</p>
              </Link>
            )
          })
        }
        <DrawerAddItem footer={true} />
      </div>
    </footer>
  )
}