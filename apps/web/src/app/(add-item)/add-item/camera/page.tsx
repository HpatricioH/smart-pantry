"use client"

import { Camera } from 'lucide-react';
import { CameraView } from "../../../components/CameraView/CameraView";
import BarcodeScanner from '../../../components/BarcodeScanner/BarcodeScanner';
import { useIsScanning } from "../../../../store/isScanning";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import { api } from '../../../../trpc/react';
import { useSearchParams } from 'next/navigation';

export default function PageCamera() {
  const { isScanning, setIsScanning } = useIsScanning()
  const router = useRouter();
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const foodApiUrl = process.env.NEXT_PUBLIC_FOOD_API_URL
  const createProduct = api.pantry.createItemPantry.useMutation()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsScanning(true)
  }

  const handleBarcodeDetected = async (barcode: string) => {
    const queryFoodAPI = await fetch(`${foodApiUrl}/${barcode}.json`)
    const data = await queryFoodAPI.json()

    if (data.status === 0) {
      toast.error(`Product not found with ${barcode} barcode detected. Please try again!`)
    } else {
      const { image_thumb_url, id, product_name, quantity, product_quantity_unit } = data.product
      const productData = {
        id: String(id),
        name: String(product_name ?? ''),
        quantity: Number(quantity) || 0,
        unit: String(product_quantity_unit ?? ''),
        image: String(image_thumb_url ?? ''),
        category: String(category)
      }

      console.log("Product Data = ", productData)

      createProduct.mutate(productData, {
        onSuccess: () => {
          toast.success('Product added to pantry')
          router.back()
        },
        onError: (ops: { message: { toString: () => string } }) => {
          const errorMessage = ops.message.toString()
          toast.error(
            `Unable to save pantry item. Please try again. ${errorMessage}`
          )
        }
      })
    }

    // Navigate to add item page with barcode
    // router.push(`/add-item?barcode=${encodeURIComponent(barcode)}`);
  }

  return (
    <main className="min-h-screen flex flex-col mt-12">
      <div className="p-4 sm:p-6">
        <h2 className="text-4xl font-bold text-gray-900">Add Via Camera</h2>
      </div>

      <div className="flex-1 px-2 flex flex-col">
        {!isScanning ? <CameraView /> : <BarcodeScanner onDetected={handleBarcodeDetected} />}
      </div>

      <div className='flex flex-col justify-center items-center p-4 pb-32 gap-4'>
        <p className="text-center">
          {!isScanning
            ? "Tap the button to initiate the camera and start scanning. Align the product barcode within the frame to add the item."
            : "Point your camera at a barcode. Tap stop to cancel scanning."
          }
        </p>
        {!isScanning ? (
          <button
            type="button"
            className='flex justify-center items-center bg-chart-2 rounded-full size-16 p-2'
            onClick={(e) => handleClick(e)}
          >
            <Camera className='size-16 stroke-chart-2 fill-white' />
          </button>
        ) : (
          <button
            type="button"
            className='flex justify-center items-center bg-red-500 rounded-full size-16 p-2'
            onClick={() => setIsScanning(false)}
          >
            <span className='text-white font-bold'>Stop</span>
          </button>
        )}
      </div>

    </main>
  );
}