import { HeaderPantry } from "../../../components/Header Pantry/HeaderPantry"

export default function PantryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      < HeaderPantry />
      {children}
    </>
  );
}