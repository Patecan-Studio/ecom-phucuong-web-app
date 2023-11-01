import { Footer, Tabbar } from "@/components/common";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/common.scss";
import "../styles/colors.scss";
import "../styles/fonts.scss";
import "../styles/reset.css";
import "../styles/responsives.scss";
import SaleBanner from "@/components/common/SaleBanner/SaleBanner";
import { Overview } from "@/components/composite";
import React from "react";
import ProductCardSlider from "@/components/common/CategorySlider/CategorySlider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/icon.png",
  },
  title: "Phú Cường Home",
  description:
    "Tập đoàn Phú Cường (Phu Cuong Group) được thành lập đầu năm 2009 với vai trò nhà đầu tư tài chính của các công ty thành viên trong tập đoàn, với tổng số vốn điều lệ hơn 3.500 tỷ đồng (tương đương 170 triệu USD).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <SaleBanner
          data={
            "\n" +
            "                    Tận hưởng ưu đãi giảm giá 20% cho Toàn bộ sản phẩm Ghế nồi Phòng Khách từ Sofa, Sofa Giường, Ghế\n" +
            "                    Bành đến Ghế Đồn. Ngày kết thức: 29/10/2023"
          }
        />
        <Tabbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
