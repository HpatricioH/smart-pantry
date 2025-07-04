import { Plus } from 'lucide-react';
import { Camera } from 'lucide-react';
// import Button from "../../lib/utils/Button";
import { Button } from '@smart-pantry/ui'
import { PantryCards } from "../../components/PantryCards/PantryCards"
import Link from 'next/link';

export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] justify-items-start min-h-screen p-4 pb-20 gap-16 sm:p-20">
      <div className="inline-flex flex-col gap-4 mt-12 w-full ">
        <h1 className="text-4xl font-bold text-gray-900">Pantry Inventory</h1>
        <div className='flex gap-2'>
          <Button
            variant="default"
          >
            <Plus />
            Add Item
          </Button>
          <Link
            className='rounded-lg flex justify-center items-center p-3 gap-2 font-semibold text-white tracking-wide text-lg bg-red-500 hover:bg-red-600 transition-colors'
            href={'/add-item/camera'}
          >
            <Camera />
            Add via Camera
          </Link>
        </div>

        <PantryCards />
      </div>
    </main>
  );
}