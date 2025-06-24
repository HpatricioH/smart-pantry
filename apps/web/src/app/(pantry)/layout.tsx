import { Footer } from "../components/Footer/Footer";

export default function PantryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      < Footer />
    </>
  );
}