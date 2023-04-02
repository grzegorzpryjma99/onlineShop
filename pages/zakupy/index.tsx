import dynamic from "next/dynamic";
import {OnlyContentLayout} from "@/components/layout/OnlyContentLayout";
import {Loader} from "@/components/common/Loader";

export default function HomePage() {

    const OrderTemplate = dynamic(
        () => import('@/components/order/templates/OrderTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return (
        <OnlyContentLayout title='Sklep online - Złóż zamówienie'>
            <OrderTemplate/>
        </OnlyContentLayout>
    )
}