import type { Metadata } from "next";
import "../../../styles/main.css"
import Navbar from "@/components/BlogComponent/navbar/Navbar";
import NextTopLoader from "nextjs-toploader";
import DesktopMenu from "@/components/BlogComponent/desktop-menu/DesktopMenu";
import { Footer } from "@/components/common";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Phú Cường Home",
  description:
    "Tập đoàn Phú Cường (Phu Cuong Group) được thành lập đầu năm 2009 với vai trò nhà đầu tư tài chính của các công ty thành viên trong tập đoàn, với tổng số vốn điều lệ hơn 3.500 tỷ đồng (tương đương 170 triệu USD).",
};

const getPageTemplate = async () => {
  try {
    const response = await fetch(
      `${process.env.SITE_DOMAIN}/api/v1/page-templates/default`,
      { cache: "no-cache" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageTemplate = await getPageTemplate();
  const section_list = pageTemplate?.section_list || [];
  const coupon_banner_section =
    section_list.find(
      (section: any) => section.name === "coupon_banner_section"
    )?.image_list || [];


  return (
    <html lang="en">
      <body className="Body">
        <NextTopLoader color="#d1d5db" />
        <Navbar />
        <DesktopMenu />
        <div className="content">{children}</div>
        <Footer data={coupon_banner_section} />
      </body>
    </html>
  );
}
