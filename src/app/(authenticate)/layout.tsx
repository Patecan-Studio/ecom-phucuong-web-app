import {
  Footer,
  Tabbar,
  AntdStyledComponentsRegistry,
} from "@/components/common";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/common.scss";
import "@/styles/colors.scss";
import "@/styles/fonts.scss";
import "@/styles/reset.css";
import "@/styles/responsives.scss";
import "antd/dist/reset.css";
import React from "react";
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Tabbar isSecondaryMenu={false} />
        <AntdStyledComponentsRegistry>{children}</AntdStyledComponentsRegistry>
        <Footer />
      </body>
    </html>
  );
}
