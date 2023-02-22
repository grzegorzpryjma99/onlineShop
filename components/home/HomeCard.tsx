import React from "react";
import Link from "next/link";
import ActionButton from "@/components/common/ActionButton";
import {Rating} from "primereact/rating";

const HomeCard = () => (
    <div className='bannerCard'>
        <h2 className='h2-title'>The nature candle</h2>
        <p className='description'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
        <ActionButton url='/' label='Discovery our collection'/>
        <Rating value={5} readOnly cancel={false} />

    </div>
);

export default HomeCard;