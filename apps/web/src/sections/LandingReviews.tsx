import Image from "next/image";

export function LandingReviews() {
  return (
    <section className="relative z-20 mx-auto px-6">
      <div className="rounded-lg bg-[#FAF9F6]/50 p-4">
        <div className="flex justify-center items-center gap-3">
          <div className="rounded-full bg-[#DDECFF]/50 p-1">
            <Image
              src='https://res.cloudinary.com/dase1w9ff/image/upload/c_thumb,w_200,g_face/v1755741667/SmartPantry/avatarComment_iz1pna.webp'
              alt="User photo"
              width={100}
              height={100}
              className="rounded-full"
              loading="lazy"
            />
          </div>
          <p>I stopped overbuying rice and finally use what I have!</p>
        </div>
      </div>
    </section>
  )
}