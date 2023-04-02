import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {Loader} from "@/components/common/Loader";

export default function HomePage() {

    const Cart = dynamic(
        () => import('@/components/cart/templates/CartTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online - koszyk'>
            <Cart/>
        </Layout>
    )
}