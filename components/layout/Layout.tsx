import Head from "next/head";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

interface PublicLayoutProps {
    title: string;
    children?: React.ReactNode
}

export const Layout = (props: PublicLayoutProps) => {
    return <>
        <Head>
            <meta name={props.title} content={props.title}/>
            <title>{props.title}</title>
        </Head>
        <nav>
            <Navbar/>
        </nav>
        <main>
            {props.children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
}