"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function HeaderPantry() {
  const router = useRouter();

  return (
    <header
      className="relative mx-auto w-full max-w-6xl place-self-center z-40"
      style={{ position: "fixed", top: 0 }}
    >
      <nav className="flex items-center justify-between px-4 bg-light-bg text-text-secondary backdrop-blur-[6px] transition-transform">
        <button onClick={() => router.back()} type="button" className="cursor-pointer">
          <ArrowLeft className="hover:stroke-chart-2" />
        </button>
        <Link href="/pantry">
          <Image
            src="https://res.cloudinary.com/dase1w9ff/image/upload/c_thumb,w_200,g_face/v1755310381/SmartPantry/logo_2_gynvyt.webp"
            alt="Smart Pantry Logo"
            width={65}
            height={65}
            loading="lazy"
          />
        </Link>
      </nav>
    </header>
  );
}
