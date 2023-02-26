import React from "react";
import ActionButton from "@/components/common/button/ActionButton";

const HomeCard = () => (
    <div className='bannerCard'>
        <h2 className='h2-title'>The nature candle</h2>
        <p className='description'>All handmade with natural soy wax, Candleaf is a companion for all your pleasure
            moments </p>
        <ActionButton url='/lista-produktow' label='Discovery our collection'/>
    </div>
);

export default HomeCard;