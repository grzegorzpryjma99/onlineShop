import Head from "next/head";
import React from "react";

interface OrderLayoutProps {
    title: string;
    children?: React.ReactNode
}

export const OnlyContentLayout = (props: OrderLayoutProps) => {
    return <>
        <Head>
            <title>{props.title}</title>
        </Head>
        <main>
            {props.children}
        </main>
    </>
}