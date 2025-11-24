import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav
      className="relative z-20 mx-auto max-w-6xl flex items-center justify-between p-2 bg-light-bg text-text-secondary w-full mb-2"
    >
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
    </nav>
  )
}