import { SquareCheck } from 'lucide-react';
import { ChefHat } from 'lucide-react';
import { FeatureCard } from "../app/components/FeatureCard/FeatureCard";

export function LandingCards() {
  return (
    <section
      className="
        grid gap-6 p-4 sm:p-10
        sm:grid-cols-2 lg:grid-cols-3
        [grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))] z-50
      "
    >
      <FeatureCard
        bg="bg-[#FFECD8]"
        title="Track Your Pantry"
        description="Easily scan groceries and keep your pantry organized."
        imageSrc="https://res.cloudinary.com/dase1w9ff/image/upload/c_thumb,w_200,g_face/v1755489556/SmartPantry/carrot_wjsmxp.png"
        imageAlt="Carrot icon"
      />

      <FeatureCard
        bg="bg-[#FFF1C5]"
        title="Smart Restock Alerts"
        description="Get reminders when essentials are low."
        Icon={SquareCheck}
      />

      <FeatureCard
        bg="bg-[#C2F7E0]"
        title="AI Recipe Suggestions"
        description="Turn what you already have into delicious meals."
        Icon={ChefHat}
      />
    </section>

  )
}