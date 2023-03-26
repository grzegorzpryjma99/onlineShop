import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";

export default function ProductListPage() {

    const ProductsList = dynamic(
        () => import('@/components/products/templates/ProductsListTemplate'),
        {
            loading: () => <p>Wczytywanie...</p>, //TODO: create loader
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online'>
            <ProductsList/>
        </Layout>
    )
}