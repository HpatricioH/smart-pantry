import Image from "next/image"
import Link from "next/link"
import { api } from "apps/web/src/trpc/server"

export async function CategoriesCards() {
  const categoriesData = await api.categories.getAllCategories()

  return (
    <article className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {categoriesData?.map(item => {
        return (
          <Link
            key={item.id}
            href={`/categories/${item.name.toLowerCase()}`}
            className="flex flex-col justify-start items-start p-4 shadow-md rounded-lg bg-ring/5 hover:shadow-chart-2/40"
          >
            <div className="w-full h-36 relative rounded-md self-center">
              <Image
                src={item.image ?? ""}
                alt={`${item.name} image`}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-md font-semibold self-center">{item.name}</h3>
          </Link>
        )
      })}
    </article>
  )
}
