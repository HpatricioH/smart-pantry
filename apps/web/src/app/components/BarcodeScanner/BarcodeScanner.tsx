"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader, type IScannerControls } from "@zxing/browser";
import { useIsScanning } from "../../../store/isScanning";

interface BarcodeScannerProps {
  onDetected?: (result: string) => void;
}

export default function BarcodeScanner({ onDetected }: BarcodeScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const codeReaderRef = useRef<BrowserMultiFormatReader | null>(null);
  const controlsRef = useRef<IScannerControls | null>(null);
  const lastDetectedRef = useRef<string | null>(null);
  const scanAttemptsRef = useRef<number>(0);
  const { setIsScanning } = useIsScanning();
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [scanningStatus, setScanningStatus] = useState<string>("Initializing camera...");

  // TODO: move this to a custom hook
  useEffect(() => {
    const startScanner = async () => {
      try {
        setScanningStatus("Requesting camera access...");
        // Request camera permissions first with optimized settings for barcode scanning
        console.log("📷 Requesting camera with HD resolution for better barcode detection...");
        await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 1280, min: 640 },
            height: { ideal: 720, min: 480 }
          }
        });

        setScanningStatus("Initializing barcode reader...");
        const codeReader = new BrowserMultiFormatReader();
        codeReaderRef.current = codeReader;

        const devices = await BrowserMultiFormatReader.listVideoInputDevices();

        if (devices.length === 0) {
          throw new Error("No camera devices found");
        }

        // Prefer back camera for barcode scanning
        const backCamera = devices.find(device =>
          device.label.toLowerCase().includes('back') ||
          device.label.toLowerCase().includes('environment')
        );
        const deviceId = backCamera?.deviceId || devices[0]?.deviceId;

        if (deviceId && videoRef.current) {
          setScanningStatus("Starting barcode scanner...");
          const controls = await codeReader.decodeFromVideoDevice(
            deviceId,
            videoRef.current,
            (result, error) => {
              if (error && error.name !== 'NotFoundException') {
                console.log("❌ Scan error:", error.name, error.message);
              }
              if (result) {
                onDetected?.(result.getText());
                controls.stop();
                setIsScanning(false);
              }
            }
          );

          controlsRef.current = controls;
          setIsInitialized(true);
          setScanningStatus("Ready to scan - Point camera at barcode");
          console.log("📡 Scanner started successfully");
        }
      } catch (err) {
        console.error("Camera initialization error:", err);
        setIsInitialized(false);
        if (err instanceof Error) {
          if (err.name === 'NotAllowedError') {
            setError("Camera access denied. Please allow camera permissions and refresh.");
          } else if (err.name === 'NotFoundError') {
            setError("No camera found. Please ensure your device has a camera.");
          } else if (err.name === 'NotSupportedError') {
            setError("Camera not supported in this browser.");
          } else {
            setError(`Camera error: ${err.message}`);
          }
        } else {
          setError("Camera access failed. Please check permissions.");
        }
        setScanningStatus("Camera initialization failed");
      }
    };

    startScanner();

    return () => {
      // Cleanup scanner when component unmounts
      controlsRef.current?.stop();
      // Clear refs
      controlsRef.current = null;
      codeReaderRef.current = null;
      lastDetectedRef.current = null;
      scanAttemptsRef.current = 0;
    };
  }, [onDetected, setIsScanning]);


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