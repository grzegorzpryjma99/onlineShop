import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";

export default function HomePage() {

    const Home = dynamic(
        () => import('@/components/home/templates/HomeTemplate'),
        {
            loading: () => <p>Wczytywanie...</p>, //TODO: create loader
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online'>
            <Home/>
        </Layout>
    )
}