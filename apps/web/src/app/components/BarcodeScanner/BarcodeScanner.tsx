"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";

interface BarcodeScannerProps {
  onDetected?: (result: string) => void;
}

export function BarcodeScanner({ onDetected }: BarcodeScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const stopScannerRef = useRef<import("@zxing/browser").IScannerControls | null>(null);
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
              if (result) {
                console.log("📦 Barcode:", result.getText());
                onDetected?.(result.getText());
                stopScan.stop();
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
  }, [onDetected]);

  return (
    <div className="w-full max-w-sm mx-auto">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <video ref={videoRef} className="w-full rounded-md" autoPlay muted playsInline />
    </div>
  );
}