import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {Loader} from "@/components/common/Loader";
import {GetStaticProps} from "next";
import {Product, ProductCategory, SortMode} from "@/components/products/types/types";

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
    let {paginatedProducts, totalElement} = await getPaginatedProductsWithFilter(0, 8, null, '', null)
    return {
        props: {
            paginatedProducts,
            totalElement
        },
    }
}

export const getPaginatedProductsWithFilter = async (pageNumber: number, pageSize: number, category: ProductCategory | null, name: string, sortMode: SortMode | null) => {
    const res = await fetch('https://online-shop-8pumfsh77-grzegorzpryjma99.vercel.app/api/products')
    let filteredProducts: Product[] = await res.json();
    const startIndex = (pageNumber) * pageSize;
    const endIndex = startIndex + pageSize;
    let totalElement = filteredProducts.length;

    if (category !== undefined && category !== null) {
        filteredProducts = filteredProducts.filter(product => {
            return ProductCategory[product.category as keyof typeof ProductCategory] === category.valueOf()
        });
        totalElement = filteredProducts.length;
    }

    if (sortMode !== undefined && sortMode !== null) {
        if (SortMode.Low === sortMode) {
            filteredProducts = filteredProducts.sort((product1, product2) => product1.price - product2.price);
        }
        if (SortMode.High === sortMode) {
            filteredProducts = filteredProducts.sort((product1, product2) => product1.price + product2.price);
        }
        totalElement = filteredProducts.length;
    }

    if (name !== undefined && name !== null && name !== "") {
        filteredProducts = filteredProducts.filter(product => {
            return product.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        });
        totalElement = filteredProducts.length;
    }

    let paginatedProducts: Product[] = filteredProducts.map(product => ({
        ...product,
        category: ProductCategory[product.category as keyof typeof ProductCategory]
    })).slice(startIndex, endIndex);

    return {paginatedProducts, totalElement};
}