import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {Loader} from "@/components/common/Loader";

export default function ProductListPage() {

    const ProductsList = dynamic(
        () => import('@/components/products/templates/ProductsListTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online - produkty'>
            <ProductsList/>
        </Layout>
    )
}