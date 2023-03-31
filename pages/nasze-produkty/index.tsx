import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";

export default function ProductListPage() {

    const LearnMoreTemplate = dynamic(
        () => import('@/components/about/LearnMoreTemplate'),
        {
            loading: () => <p>Wczytywanie...</p>, //TODO: create loader
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online'>
            <LearnMoreTemplate/>
        </Layout>
    )
}