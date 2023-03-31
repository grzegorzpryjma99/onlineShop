import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {OnlyContentLayout} from "@/components/layout/OnlyContentLayout";

export default function HomePage() {

    const OrderTemplate = dynamic(
        () => import('@/components/order/templates/OrderTemplate'),
        {
            loading: () => <p>Wczytywanie...</p>, //TODO: create loader
            ssr: true
        }
    )

    return (
        <OnlyContentLayout title='Sklep online'>
            <OrderTemplate/>
        </OnlyContentLayout>
    )
}