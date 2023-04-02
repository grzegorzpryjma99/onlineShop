import React from "react";
import Image from "next/image";
import backgroundImage from '/public/bg-image.png'

const HomeBanner = () => (
    <div className='banner'>
        <Image className='bannerImage'
               src={backgroundImage}
               alt='Zdjecie w tle'
               layout='fill'
               objectFit='cover'
               objectPosition='center'
        />
    </div>
);

export default HomeBanner;