import Image from "next/image";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left */}
      <div className="absolute -top-45 -left-35 w-80 h-80 -rotate-45 blur-md">
        <Image src="/hero_left.svg" alt="Top left svg" fill />
      </div>

      {/* Top Right */}
      <div className="absolute -top-45 -right-45 w-96 h-96 rotate-45 blur-md">
        <Image src="/hero_right.svg" alt="Top left svg" fill />
      </div>
    </div>
  );
}
