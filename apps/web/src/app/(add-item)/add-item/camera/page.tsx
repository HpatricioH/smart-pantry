// import { Camera } from "../../../components/Camera/Camera";
import { Camera } from 'lucide-react';
import { CameraView } from "../../../components/CameraView/CameraView";
import { Button } from "../../../lib/utils/button";

export default function PageCamera() {
  return (
    <main className="min-h-screen flex flex-col mt-12">
      <div className="p-4 sm:p-6">
        <h2 className="text-4xl font-bold text-gray-900">Add Via Camera</h2>
      </div>

      <div className="flex-1 px-2 flex flex-col">
        <CameraView />
      </div>

      <div className='flex flex-col justify-center items-center p-4 pb-32 gap-4'>
        <p className="text-center">Align item within the frame, tap the button to add item.</p>
        <button type="button" className='flex justify-center items-center bg-chart-2 rounded-full size-16 p-2' >
          <Camera className='size-16 stroke-chart-2 fill-white' />
        </button>
      </div>
    </main>
  );
}