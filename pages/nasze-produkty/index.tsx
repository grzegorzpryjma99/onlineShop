import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {Loader} from "@/components/common/Loader";

export default function ProductListPage() {

    const LearnMoreTemplate = dynamic(
        () => import('@/components/about/LearnMoreTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online - nasze produkty'>
            <LearnMoreTemplate/>
        </Layout>
    )
}