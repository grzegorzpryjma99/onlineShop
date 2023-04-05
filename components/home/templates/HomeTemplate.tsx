import HomeBanner from "@/components/home/HomeBanner";
import HomeCard from "@/components/home/HomeCard";
import PopularProductList from "@/components/home/PopularProductList";
import News from "@/components/home/News";
import Opinions from "@/components/home/Opinions";
import React from "react";
import Link from "next/link";

const HomeTemplate = (props: any) => {
    return <>
        <HomeBanner/>
        <HomeCard/>
        <div>
            <PopularProductList title='Products' description='Order it for you or for your beloved ones'
                                products={props.products}/>
            <Link href='/lista-produktow'><p className='description'>Show more...</p></Link>
            <br/>
        </div>
        <News/>
        <Opinions/>
        <div>
            <PopularProductList title='Popular' description='Our top selling product that you may like'
                                products={props.products}/>
        </div>
    </>
}

export default HomeTemplate;