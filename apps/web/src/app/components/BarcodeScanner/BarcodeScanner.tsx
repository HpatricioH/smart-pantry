"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { useIsScanning } from "apps/web/src/store/isScanning";

interface BarcodeScannerProps {
  onDetected?: (result: string) => void;
}

export function BarcodeScanner({ onDetected }: BarcodeScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const stopScannerRef = useRef<import("@zxing/browser").IScannerControls | null>(null);
  const { setIsScanning } = useIsScanning()
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startScanner = async () => {
      console.log("Starting scanner");

      try {
        const codeReader = new BrowserMultiFormatReader();
        codeReaderRef.current = codeReader;

        const devices = await BrowserMultiFormatReader.listVideoInputDevices();
        const deviceId = devices[0]?.deviceId;

        if (deviceId && videoRef.current) {
          const stopScan = await codeReader.decodeFromVideoDevice(
            deviceId,
            videoRef.current,
            (result, error) => {
              console.log("error inside scan", error?.message)
              if (result) {
                console.log("📦 Barcode:", result.getText());
                onDetected?.(result.getText());
                stopScan.stop();
                setIsScanning(false)
              }
            }
          );
          stopScannerRef.current = stopScan;
        }
      } catch (err) {
        console.error(err);
        setError("Camera access failed. Please check permissions.");
      }
    };

    startScanner();

    return () => {
      stopScannerRef.current?.stop();
    };
  }, [onDetected, setIsScanning]);

  return (
    <div className="w-full h-full mx-auto ">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <video ref={videoRef} className="h-full w-full rounded-md " autoPlay muted playsInline />
    </div>
  );
}