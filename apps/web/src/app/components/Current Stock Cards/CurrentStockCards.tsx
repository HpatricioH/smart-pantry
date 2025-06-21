import Image from "next/image";

export function CurrentStockCards() {
  return (
    <article>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cards */}
        <div className="flex justify-center items-center gap-2 bg-[#DDECFF] shadow-md rounded-lg py-4 h-28 ">
          <Image
            src="/images/milk.webp"
            alt="Milk"
            width={80}
            height={80}
            loading="lazy"
            className="object-cover"
          />
          <h3 className="text-lg font-semibold">Milk</h3>
        </div>
        <div className="flex justify-center items-center gap-2 bg-[#FFECD8] shadow-md rounded-lg py-4 h-28 ">
          <Image
            src="/images/bread.webp"
            alt="Bread"
            width={80}
            height={80}
            loading="lazy"
            className="object-cover"
          />
          <h3 className="text-lg font-semibold">Bread</h3>
        </div>
        <div className="flex justify-center items-center gap-2 bg-[#C2F7E0] shadow-md rounded-lg py-4 h-28 ">
          <Image
            src="/images/eggs.webp"
            alt="Eggs"
            width={100}
            height={100}
            loading="lazy"
            className="object-cover"
          />
          <h3 className="text-lg font-semibold">Eggs</h3>
        </div>
        <div className="flex justify-center items-center gap-2 bg-[#FFF1C5] shadow-md rounded-lg py-4 h-28 ">
          <Image
            src="/images/rice.webp"
            alt="Rice"
            width={80}
            height={80}
            className="object-cover"
            loading="lazy"
          />
          <h3 className="text-lg font-semibold">Rice</h3>
        </div>
      </div>
    </article>
  )
}