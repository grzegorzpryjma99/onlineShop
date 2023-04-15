import Head from "next/head";
import React from "react";

interface OrderLayoutProps {
    title: string;
    children?: React.ReactNode
}

export const OnlyContentLayout = (props: OrderLayoutProps) => {
    return <>
        <Head>
            <meta name={props.title} content={props.title}/>
            <title>{props.title}</title>
        </Head>
        <main>
            {props.children}
        </main>
    </>
}