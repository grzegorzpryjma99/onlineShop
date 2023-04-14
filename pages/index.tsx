import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {Loader} from "@/components/common/Loader";
import {GetStaticProps} from "next";

export default function HomePage(props: any) {
    const Home = dynamic(
        () => import('@/components/home/templates/HomeTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online'>
            <Home {...props}/>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('https://online-shop-8pumfsh77-grzegorzpryjma99.vercel.app/api/products')
    const products = await res.json()
    return {
        props: {
            products,
        },
    }
}