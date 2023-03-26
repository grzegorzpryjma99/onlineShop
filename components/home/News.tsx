import React from "react";
import Image from "next/image";
import newsPlaceholder from "public/newsPhoto.png"
import ActionButton from "@/components/common/button/ActionButton";


interface NewsProps {
}

const News = (props: NewsProps) => (
    <div className='news-container'>
        <div>
            <div>
                <h2 className='h2-title'>Clean and fragrant soy wax</h2>
                <span className='subline'>Made for your home and for your wellness</span>
            </div>
            <ul className='news-container-list'>
                <li>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable: All recyclable materials, 0% CO2 emissions</li>
            </ul>
            <ActionButton style={{width: '40%', fontSize: '18px'}} url='/' label='Learn more'/>
        </div>
        <div>
            <Image src={newsPlaceholder} alt='zdjecie informacyjne'/>
        </div>
    </div>
);

export default News;