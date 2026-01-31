import { Footer } from "../components/Footer/Footer";
import { HeaderAddItem } from "../components/HeaderAddItem/HeaderAddItem";

export default function AddItemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderAddItem />
      {children}
    </>
  );
}
