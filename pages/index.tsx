import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import HomeBanner from "@/components/home/HomeBanner";
import HomeCard from "@/components/home/HomeCard";
import Footer from "@/components/footer/Footer";
import SimpleProductCard from "@/components/home/SimpleProductCard";
import ProductList from "@/components/home/ProductList";
import Opinions from "@/components/home/Opinions";
import News from "@/components/home/News";

export default function Home() {
    return (
        <>
            <Head>
                <title>Sklep online</title>
                <meta
                    name="description"
                    content="Next.js + app"
                />
            </Head>
            <Navbar/>
            <HomeBanner/>
            <HomeCard/>
            <div>
                <ProductList productNumber={8}/>
            </div>
            <News/>
            <Opinions/>
            <div>
                <ProductList productNumber={4}/>
            </div>
            <Footer/>
        </>
    )
}