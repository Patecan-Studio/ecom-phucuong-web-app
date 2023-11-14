"use client";

import {Footer, Tabbar} from "@/components/common";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/common.scss";
import "../styles/colors.scss";
import "../styles/fonts.scss";
import "../styles/reset.css";
import "../styles/responsives.scss";
import SaleBanner from "@/components/common/SaleBanner/SaleBanner";
import {ReduxProviders} from "@/components/Provider";
import CartHeaders from "@/components/cart_temp/CartHeaders";
import {useEffect, useState} from "react";
import {persistor} from "@/store/store";

const inter = Inter({subsets: ["latin"]});


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
                "Tận hưởng ưu đãi giảm giá 20% cho Toàn bộ sản phẩm Ghế nồi Phòng Khách từ Sofa, Sofa Giường, Ghế\n" +
                "Bành đến Ghế Đồn. Ngày kết thúc: 29/10/2023"
            }
        />
        <ReduxProviders>
            <CartHeaders/>
            <Tabbar/>
            {children}
        </ReduxProviders>

        <Footer/>
        </body>
        </html>
    );
}
