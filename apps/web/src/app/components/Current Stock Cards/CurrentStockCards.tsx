import Image from "next/image";
import currentStockItems from "../../../../../../packages/ui-web/src/data/currentStockItems.json";

export function CurrentStockCards() {
  return (
    <article>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cards */}
        {
          currentStockItems.map((item) => {
            return (
              <div
                key={item.id}
                className='flex justify-center items-center gap-2 shadow-md rounded-lg py-4 h-28'
                style={{ backgroundColor: item.bgColor }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  loading="lazy"
                  className="object-cover"
                />
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
            )
          })
        }
      </div>
    </article>
  )
}