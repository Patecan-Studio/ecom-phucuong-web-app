import { Products } from "@/components/common";
import { Banner } from "@/components/composite";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Banner />
      {children}
    </>
  );
}
