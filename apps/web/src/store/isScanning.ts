import { create } from 'zustand'

interface isScanningProps {
  isScanning: boolean
  setIsScanning: (isScanning: boolean) => void
}

export const useIsScanning = create<isScanningProps>((set) => ({
  isScanning: false,
  setIsScanning: (isScanning: boolean) => set({ isScanning })
}))