import Head from "next/head";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface OrderLayoutProps {
    title: string;
    children?: React.ReactNode
}

export const OrderLayout = (props: OrderLayoutProps) => {
    return <>
        <Head>
            <title>{props.title}</title>
        </Head>
        <main>
            {props.children}
        </main>
    </>
}