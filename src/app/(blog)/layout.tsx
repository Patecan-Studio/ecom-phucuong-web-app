import type { Metadata } from "next";
import "../styles/main.css";
import Navbar from "@/components/BlogComponent/navbar/Navbar";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/BlogComponent/footer/Footer";
import DesktopMenu from "@/components/BlogComponent/desktop-menu/DesktopMenu";
import { siteInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="Body">
        <NextTopLoader color="#d1d5db" />
        <Navbar />
        <DesktopMenu />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
