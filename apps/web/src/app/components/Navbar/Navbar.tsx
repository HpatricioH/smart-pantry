import { SignedIn, UserButton } from '@clerk/nextjs';
import { ScanBarcode } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { DrawerAddItem } from '../DrawerAddItem/DrawerAddItem';
import ScanDropdownMenu from '../ScanDropdownMenu/ScanDropdownMenu';

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
        <ScanDropdownMenu />

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