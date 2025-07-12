"use client"

import { useEffect, useRef, useState } from "react";

export function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        setError(`Unable to access camera: ${err}`)
      }
    }

    enableCamera()

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks()
        for (const track of tracks) {
          track.stop();
        }
      }
    }
  }, [])

  return (
    <div className="w-full max-w-md mx-auto">
      {error && <p className="text-red-500">{error}</p>}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-auto rounded-md"
      />
    </div>
  )
}
