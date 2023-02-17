import React from "react";
import Link from "next/link";

const HomeCard = () => (
    <div className='bannerCard'>
        <h2 className='h2-title'>The nature candle</h2>
        <p className='description'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
        <Link href='/'><button className='action-button'>Discovery our collection</button></Link>
    </div>
);

export default HomeCard;