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
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()
    console.log("Home.getStaticProps: pobrano dane z api")
    return {
        props: {
            products,
        },
    }
}