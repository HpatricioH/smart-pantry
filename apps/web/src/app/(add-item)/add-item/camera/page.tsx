"use client"

import { Camera } from 'lucide-react';
import { CameraView } from "../../../components/CameraView/CameraView";
import { BarcodeScanner } from '../../../components/BarcodeScanner/BarcodeScanner';
import { useIsScanning } from "apps/web/src/store/isScanning";

export default function PageCamera() {
  const { isScanning, setIsScanning } = useIsScanning()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsScanning(true)
  }

  return (
    <main className="min-h-screen flex flex-col mt-12">
      <div className="p-4 sm:p-6">
        <h2 className="text-4xl font-bold text-gray-900">Add Via Camera</h2>
      </div>

      <div className="flex-1 px-2 flex flex-col">
        {!isScanning ? <CameraView /> : <BarcodeScanner />}
      </div>

      <div className='flex flex-col justify-center items-center p-4 pb-32 gap-4'>
        <p className="text-center">Align item within the frame, tap the button to add item.</p>
        <button
          type="button"
          className='flex justify-center items-center bg-chart-2 rounded-full size-16 p-2'
          onClick={(e) => handleClick(e)}
        >
          <Camera className='size-16 stroke-chart-2 fill-white' />
        </button>
      </div>

    </main>
  );
}