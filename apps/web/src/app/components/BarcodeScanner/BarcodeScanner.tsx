"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader, type IScannerControls } from "@zxing/browser";
import { useIsScanning } from "apps/web/src/store/isScanning";

interface BarcodeScannerProps {
  onDetected?: (result: string) => void;
}

export function BarcodeScanner({ onDetected }: BarcodeScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const stopScannerRef = useRef<IScannerControls | null>(null);
  const { setIsScanning } = useIsScanning()
  const [error, setError] = useState<string | null>(null);

  // TODO: move this to a custom hook
  useEffect(() => {
    const startScanner = async () => {

      try {
        const codeReader = new BrowserMultiFormatReader();
        codeReaderRef.current = codeReader;

        const devices = await BrowserMultiFormatReader.listVideoInputDevices();
        const deviceId = devices[0]?.deviceId;

        if (deviceId && videoRef.current) {
          const controls = await codeReader.decodeFromVideoDevice(
            deviceId,
            videoRef.current,
            (result, error) => {
              console.log("error inside scan", error?.message)
              if (result) {
                console.log("📦 Barcode:", result.getText());
                onDetected?.(result.getText());
                controls.stop();
                setIsScanning(false)
              }
            }
          );

          setTimeout(() => controls.stop(), 20000)
        }
      } catch (err) {
        setError("Camera access failed. Please check permissions.");
      }
    };

    startScanner();

    return () => {

      stopScannerRef.current?.stop();
    };
  }, [onDetected, setIsScanning]);


  return (
    <div className="w-full h-[30rem] mx-auto-md mx-auto">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <video
        ref={videoRef}
        className="h-full w-full rounded-md object-cover"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}