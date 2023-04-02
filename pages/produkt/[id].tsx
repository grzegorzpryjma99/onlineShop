import React, {useEffect, useState} from "react";
import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {ProductProps} from "@/components/products/templates/ProductTemplate";
import {Product} from "@/components/products/types/types";
import {useRouter} from "next/router";
import {exampleProductList4} from "@/lib/Utils";
import {Loader} from "@/components/common/Loader";

const ProductPage = () => {

    const router = useRouter();
    const {id} = router.query
    const [product, setProduct] = useState<Product | null>(null)

    //TODO: zmienić to dla ssr i csr
    useEffect(() => {
        const productId: number = parseInt(router.query.id as string, 10)
        let product: Product | null = exampleProductList4.find((product: Product) => product.id === productId) || null;
        setProduct(product)
    }, [id])

    const Product = dynamic<ProductProps>(
        () => import('@/components/products/templates/ProductTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return <Layout title={product?.name || 'Sklep online'}>
        {product && <Product product={product}/>}
    </Layout>

};

export default ProductPage;