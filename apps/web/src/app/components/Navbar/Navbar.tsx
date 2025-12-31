import { SignedIn, UserButton } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import { ScanBarcode } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../lib/utils/button';
import { DrawerAddItem } from '../DrawerAddItem/DrawerAddItem';

export function Navbar() {
  return (
    <nav
      className="relative z-20 mx-auto max-w-6xl flex items-center justify-between p-2 bg-light-bg text-text-secondary w-full mb-2"
    >

      <div className='flex justify-center items-center'>
        <Link
          href="/"
        >
          <Image
            src="https://res.cloudinary.com/dase1w9ff/image/upload/c_thumb,w_200,g_face/v1755310381/SmartPantry/logo_2_gynvyt.webp"
            alt='Smart Pantry Logo'
            width={65}
            height={65}
            loading='lazy'
          />
        </Link>
        <p className="text-md text-text-primary font-bold">
          Smart Pantry
        </p>
      </div>

      <div className='flex justify-center items-center gap-2'>
        <Link href="/add-item/camera" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3">
          <ScanBarcode />
          Scan Item
        </Link>

        <DrawerAddItem
          navbar={true}
        />

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                userButtonPopoverFooter: {
                  display: "none"
                },
                avatarBox: {
                  width: "2.75rem",
                  height: "2.75rem"
                }
              }
            }} />
        </SignedIn>
      </div>
    </nav>
  )
}