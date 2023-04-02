import dynamic from "next/dynamic";
import {OnlyContentLayout} from "@/components/layout/OnlyContentLayout";
import {Loader} from "@/components/common/Loader";

export default function ProductListPage() {

    const LoginTemplate = dynamic(
        () => import('@/components/login/template/LoginTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return (
        <OnlyContentLayout title='Sklep online - logowanie'>
            <LoginTemplate/>
        </OnlyContentLayout>
    )
}