"use client";

import { useCamera } from "../../lib/hooks/useCamera";

interface BarcodeScannerProps {
  onDetected?: (result: string) => void;
}

export default function BarcodeScanner({ onDetected }: BarcodeScannerProps) {
  const { error, isInitialized, scanningStatus, videoRef } = useCamera({ onDetected: onDetected ?? (() => {}) });

  return (
    <div className="w-full h-[30rem] mx-auto-md mx-auto relative">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      
      <div className="relative h-full w-full">
        <video
          ref={videoRef}
          className="h-full w-full rounded-md object-cover"
          autoPlay
          muted
          playsInline
        />
        
        {/* Loading overlay */}
        {!isInitialized && !error && (
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <div className="text-lg font-semibold mb-2">Initializing Camera</div>
              <div className="text-sm opacity-75">{scanningStatus}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}