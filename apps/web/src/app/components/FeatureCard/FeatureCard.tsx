import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";

type FeatureCardProps = {
  title: string;
  description: string;
  bg?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
};

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
      <div className="flex items-center justify-center w-28 h-16 sm:h-20 mb-3">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={100}
            height={80}
            className="h-24 w-56"
          />
        ) : Icon ? (
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 stroke-text-primary fill-white/60" />
        ) : null}
      </div>

      <h2 className="text-text-primary font-bold text-md sm:text-lg text-center">{title}</h2>
      <p className="text-center text-sm sm:text-base mt-2">{description}</p>
    </div>
  );
}
