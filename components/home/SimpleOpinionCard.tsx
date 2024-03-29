import React from "react";
import Image from "next/image";
import userPlaceholder from "public/userPlaceholder.png"
import {Rating} from 'primereact/rating';

interface SimpleOpinionCardProps {
    comment: string
    firstName: string
    lastName: string
    rate: number
}

const SimpleOpinionCard = (props: SimpleOpinionCardProps) => (
    <div className='opinion-card'>
        <Image priority src={userPlaceholder} alt='zdjecie użytkownika'/>
        <Rating className='rate' value={props.rate} readOnly cancel={false}/>
        <div className='opinion-card-details'>
            <h3>“{props.comment}”</h3>
            <p className='author'>{props.firstName}</p>
        </div>
    </div>
);

export default SimpleOpinionCard;