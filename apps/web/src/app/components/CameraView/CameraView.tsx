import { Camera } from "lucide-react";

export function CameraView() {
  return (
    <div className="flex justify-center items-center bg-purple-pale rounded-md h-full w-full min-h-[30rem]">
      <Camera className="h-28 w-28 fill-purple-400/40 stroke-purple-pale" />
    </div>
  );
}
