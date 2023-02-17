import dynamic from "next/dynamic";
import {Layout} from "@/components/layout/Layout";
import HomeBanner from "@/components/home/HomeBanner";
import HomeCard from "@/components/home/HomeCard";
import ProductList from "@/components/home/ProductList";
import News from "@/components/home/News";
import Opinions from "@/components/home/Opinions";

export default function Home() {

    return (
        <>
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
        </>
    )
}