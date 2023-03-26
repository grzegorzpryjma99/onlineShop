import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {OrderLayout} from "@/components/layout/OrderLayout";

export default function HomePage() {

    const OrderTemplate = dynamic(
        () => import('@/components/order/templates/OrderTemplate'),
        {
            loading: () => <p>Wczytywanie...</p>, //TODO: create loader
            ssr: true
        }
    )

    return (
        <OrderLayout title='Sklep online'>
            <OrderTemplate/>
        </OrderLayout>
    )
}