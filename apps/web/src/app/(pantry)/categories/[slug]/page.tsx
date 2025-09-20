import Link from "next/link"
import { Camera } from 'lucide-react';
import { DrawerAddItem } from "../../../components/DrawerAddItem/DrawerAddItem"
import { PantryCardsContainer } from "../../../components/PantryCardsContainer/PantryCardsContainer";
import { SearchContainer } from "../../../components/SearchBar/SearchContainer";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const decodedParam = decodeURIComponent(slug)

  return (
    <main className="min-h-screen p-4 pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-4 mt-12 w-full max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary">Pantry Inventory</h2>
        <SearchContainer />
        <div className='flex justify-between gap-2'>
          <DrawerAddItem />
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none bg-chart-3 text-primary-foreground shadow-xs hover:bg-chart-3/90 h-9 px-4 py-2 has-[>svg]:px-3 flex-1"
            href={'/add-item/camera'}
          >
            <Camera />
            Add via Camera
          </Link>
        </div>
        <PantryCardsContainer slug={decodedParam} />
      </div>
    </main>
  )
}