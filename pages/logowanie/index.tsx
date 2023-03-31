import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {OnlyContentLayout} from "@/components/layout/OnlyContentLayout";

export default function ProductListPage() {

    const LoginTemplate = dynamic(
        () => import('@/components/login/LoginTemplate'),
        {
            loading: () => <p>Wczytywanie...</p>, //TODO: create loader
            ssr: true
        }
    )

    return (
        <OnlyContentLayout title='Sklep online'>
            <LoginTemplate/>
        </OnlyContentLayout>
    )
}