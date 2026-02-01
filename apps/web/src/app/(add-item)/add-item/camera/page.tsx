"use client";

import CameraClient from "./CameraClient";
import { Suspense } from "react";

export default function PageCamera() {
  return (
    <Suspense fallback={<div className="p-6">Loading camera…</div>}>
      <CameraClient />
    </Suspense>
  );
}
