
import Image from "next/image"
import type { ComponentType, SVGProps } from "react"
import type { LucideIcon } from "lucide-react";
import clsx from "clsx"

type FeatureCardProps = {
  title: string;
  description: string;
  bg?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  bg = "bg-white",
  Icon,
  imageSrc,
  imageAlt,
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-start rounded-xl p-4 sm:p-6 ${bg} w-full h-full`}
    >
      <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-3">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={80}
            height={80}
            className="object-contain"
          />
        ) : Icon ? (
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 stroke-text-primary fill-white/40" />
        ) : null}
      </div>

      <h2 className="text-text-primary font-semibold text-base sm:text-lg text-center">
        {title}
      </h2>
      <p className="text-center text-sm sm:text-base mt-2">{description}</p>
    </div>
  );
}