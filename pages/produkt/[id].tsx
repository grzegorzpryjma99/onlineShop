import React, {useEffect, useState} from "react";
import {Layout} from "@/components/layout/Layout";
import {router} from "next/client";
import dynamic from "next/dynamic";
import {ProductProps} from "@/components/products/templates/ProductTemplate";
import {Product} from "@/components/products/types/types";
import {useRouter} from "next/router";

const ProductPage = () => {

    const router = useRouter();
    const {id} = router.query
    const [product, setProduct] = useState<Product | null>(null)

    useEffect(() => {
        setProduct({
            id: 1,
            name: 'Produkt1',
            description: 'All hand-made with natural soy wax, Candleaf is made for your pleasure moments.',
            price: 99
        })
    }, [id])

    const Product = dynamic<ProductProps>(
        () => import('@/components/products/templates/ProductTemplate'),
        {
            loading: () => <p>Wczytywanie...</p>, //TODO: create loader
            ssr: true
        }
    )

    return <Layout title=''>
        {product && <Product product={product}/>}
    </Layout>

};

export default ProductPage;