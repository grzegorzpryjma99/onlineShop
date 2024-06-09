import React from "react";
import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {Product} from "@/components/products/types/types";
import {Loader} from "@/components/common/Loader";
import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";

const ProductPage = (props: any) => {

    const Product = dynamic(
        () => import('@/components/products/templates/ProductTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return <Layout title={props.product?.name || 'Sklep online'}>
        <Product {...props}/>
    </Layout>

};

export default ProductPage;


interface IParams extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://online-shop-8pumfsh77-grzegorzpryjma99.vercel.app/api/products') //fixme: on prod
    const products = await res.json()
    const paths = products.map((product: Product) => ({
        params: {id: product.id.toString()},
    }))

    return {
        paths: paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const {id} = context.params as IParams
    const res = await fetch(`https://online-shop-8pumfsh77-grzegorzpryjma99.vercel.app/api/product/${id}`)
    const product = await res.json()

    return {
        props: {
            product,
        },
    }
}