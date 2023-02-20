import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";

export default function HomePage() {

    const Cart = dynamic(
        () => import('@/components/cart/templates/Cart'),
        {
            loading: () => <p>Wczytywanie...</p>, //TODO: create loader
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online'>
            <Cart/>
        </Layout>
    )
}