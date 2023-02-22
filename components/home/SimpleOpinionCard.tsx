import React from "react";
import Image from "next/image";
import userPlaceholder from "public/userPlaceholder.png"
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';

const SimpleOpinionCard = () => (
    <div className='opinion-card'>
        <Image src={userPlaceholder} alt='zdjecie użytkownika'/>
        <Rating />
        <div className='opinion-card-details'>
            <h3>“Raccomended for everyone”</h3>
            <p>Edoardo</p>
        </div>
    </div>
);

export default SimpleOpinionCard;