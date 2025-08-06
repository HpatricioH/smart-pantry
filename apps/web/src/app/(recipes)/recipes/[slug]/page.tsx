import { Recipe } from "../../../components/Recipe/Recipe";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const decodedParam = decodeURIComponent(slug);

  return (
    <main className="min-h-screen pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-4 mt-12 w-full max-w-7xl mx-auto">
        <Recipe id={decodedParam} />
      </div>
    </main>
  )
}