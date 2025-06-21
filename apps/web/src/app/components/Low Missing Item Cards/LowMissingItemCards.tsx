import Image from "next/image";

export function LowMissingItemCards() {
  return (
    <article>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Cards */}
        <div className="flex justify-start items-center gap-2 bg-[#FFE7E8] shadow-md rounded-lg p-4 h-20">
          <div className="flex justify-center items-center gap-3">
            <Image
              src="/images/salt.webp"
              alt="Salt"
              width={55}
              height={55}
              loading="lazy"
              className="object-cover"
            />
            <h3 className="text-xl font-semibold">Salt</h3>
          </div>
          <p className="flex-1 text-end text-alert-text font-bold text-xl">Low</p>
        </div>
      </div>
    </article>
  )
}