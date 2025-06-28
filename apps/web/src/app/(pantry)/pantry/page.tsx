import { Plus } from 'lucide-react';
import { Camera } from 'lucide-react';
import Button from "../../lib/utils/Button";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] justify-items-start min-h-screen p-4 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[16px] mt-12 w-full">
        <h1 className="text-4xl text-text-primary font-bold">Pantry Inventory</h1>
        <Button
          className='bg-primary hover:bg-primary-hover'
        >
          <Plus />
          Add Item
        </Button>
        <Link
          className='rounded-lg flex justify-center items-center p-3 gap-2 font-semibold text-white tracking-wide text-lg bg-secondary hover:bg-secondary-hover'
          href={'/add-item/camera'}
        >
          <Camera />
          Add via Camera
        </Link>
      </div>
    </main>
  );
}