import Image from "next/image";

export function SvgDesign() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top Left */}
      <div className="absolute -top-45 -left-35 w-80 h-80 -rotate-45 blur-md">
        <Image
          src="/hero_circle_blue.svg"
          alt="blue circle icon"
          fill
        />
      </div>

      {/* Top Right */}
      <div className="absolute -top-45 -right-45 w-96 h-96 rotate-45 blur-md">
        <Image
          src="/hero_circle_green.svg"
          alt="green circle icon"
          fill
        />
      </div>
    </div>
  )
}