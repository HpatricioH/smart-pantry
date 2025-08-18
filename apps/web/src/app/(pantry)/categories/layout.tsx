import { Footer } from "../../components/Footer/Footer";
import { HeaderPantry } from "../../components/Header Pantry/HeaderPantry";


export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      < HeaderPantry />
      {children}
      < Footer />
    </>
  );
}