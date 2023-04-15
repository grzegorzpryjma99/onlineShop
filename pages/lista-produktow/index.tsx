import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {Loader} from "@/components/common/Loader";
import {GetStaticProps} from "next";

export default function ProductListPage(props: any) {
    const ProductsList = dynamic(
        () => import('@/components/products/templates/ProductsListTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online - produkty'>
            <ProductsList {...props}/>
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