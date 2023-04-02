import {Layout} from "@/components/layout/Layout";
import dynamic from "next/dynamic";
import {Loader} from "@/components/common/Loader";

export default function HomePage() {

    const Home = dynamic(
        () => import('@/components/home/templates/HomeTemplate'),
        {
            loading: () => <Loader/>,
            ssr: true
        }
    )

    return (
        <Layout title='Sklep online'>
            <Home/>
        </Layout>
    )
}