import HomeBanner from "@/components/home/HomeBanner";
import HomeCard from "@/components/home/HomeCard";
import PopularProductList from "@/components/home/PopularProductList";
import News from "@/components/home/News";
import Opinions from "@/components/home/Opinions";
import React from "react";
import Link from "next/link";
import {exampleProductList4, exampleProductList8} from "@/lib/Utils";


const HomeTemplate = () => {
    return <>
        <HomeBanner/>
        <HomeCard/>
        <div>
            {/*TODO: pobrać i przekazać produkty*/}
            <PopularProductList title='Products' description='Order it for you or for your beloved ones'
                                products={exampleProductList8}/>
            <Link href='/lista-produktow'><p className='description'>Show more...</p></Link>
            <br/>
        </div>
        <News/>
        <Opinions/>
        <div>
            {/*TODO: pobrać i przekazać produkty*/}
            <PopularProductList title='Popular' description='Our top selling product that you may like'
                                products={exampleProductList4}/>
        </div>
    </>
}

export default HomeTemplate;