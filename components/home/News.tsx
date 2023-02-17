import React from "react";
import Image from "next/image";
import newsPlaceholder from "public/newsPhoto.png"
import Link from "next/link";


interface NewsProps {
}

const News = (props: NewsProps) => (
    <div className='news-container'>
        <div>
            <h2 className='h2-title'>Clean and fragrant soy wax</h2>
            <span className='subline'>Made for your home and for your wellness</span>
            <ul>
                <li>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
                <li>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
            </ul>
            <Link href='/'><button className='action-button'>Learn more</button></Link>
        </div>
        <div>
            <Image src={newsPlaceholder} alt='zdjecie informacyjne' />
        </div>
    </div>
);

export default News;