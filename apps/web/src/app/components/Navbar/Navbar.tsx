import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { UserRound } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav
      className="flex items-center justify-between p-2 bg-light-bg text-text-secondary w-full"
    >
      <Image
        src="https://res.cloudinary.com/dase1w9ff/image/upload/c_thumb,w_200,g_face/v1755310381/SmartPantry/logo_2_gynvyt.webp"
        alt='Smart Pantry Logo'
        width={65}
        height={65}
        loading='lazy'
      />
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonPopoverFooter: {
                display: "none"
              }
            }
          }} />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <div className='rounded-full p-2 cursor-pointer hover:bg-chart-2/70 hover:[&_svg]:stroke-white'>
            <UserRound />
          </div>
        </SignInButton>
      </SignedOut>
    </nav>
  )
}