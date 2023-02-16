import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import HomeBanner from "@/components/home/HomeBanner";
import HomeCard from "@/components/home/HomeCard";
import Footer from "@/components/footer/Footer";

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
            <div style={{height: '1000px'}}>
                Kontent głownej todo
            </div>
            <Footer/>
        </>
    )
}