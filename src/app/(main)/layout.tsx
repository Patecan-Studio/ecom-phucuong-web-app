import { Footer, Tabbar } from "@/components/common";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/common.scss";
import "@/styles/colors.scss";
import "@/styles/fonts.scss";
import "@/styles/reset.css";
import "@/styles/responsives.scss";
import SaleBanner from "@/components/common/SaleBanner/SaleBanner";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Phú Cường Home",
  description:
    "Tập đoàn Phú Cường (Phu Cuong Group) được thành lập đầu năm 2009 với vai trò nhà đầu tư tài chính của các công ty thành viên trong tập đoàn, với tổng số vốn điều lệ hơn 3.500 tỷ đồng (tương đương 170 triệu USD).",
};

const getCampaign = async () => {
  try {
    const response = await fetch(
      `${process.env.SITE_DOMAIN}/api/v1/campaigns/default`,
      { cache: "no-cache" }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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
  const campaign = await getCampaign();
  const pageTemplate = await getPageTemplate();
  const section_list = pageTemplate?.section_list || [];
  const coupon_banner_section =
    section_list.find(
      (section: any) => section.name === "coupon_banner_section"
    )?.image_list || [];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <SaleBanner data={campaign?.campaign_content || ""} />
        <Tabbar />
        {children}
        <Footer data={coupon_banner_section} />
      </body>
    </html>
  );
}
