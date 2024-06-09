import React from "react";
import Image from "next/image";
import Link from "next/link";
import {getImageById} from "@/lib/imageHelper";

interface SimpleProductCardProps {
    id: number
    name: string
    price: number
}

const SimpleProductCard = (props: SimpleProductCardProps) => (
    <div className='productCard'>
        <Link href={'/produkt/' + props.id}>
            <div style={{height: '80%'}}>
                <Image priority
                       src={getImageById(props.id)}
                       alt='Product photo'
                       objectFit='contain'
                       style={{
                           background: '#F7F8FA',
                           width: '100%',
                           objectFit: 'cover',
                           height: '100%'
                       }}
                />
                <div className='product-card-details'>
                    <p className='subject' id='product-name'>{props.name}</p>
                    <p className='mentor' id='product-price'>{props.price} PLN</p>
                </div>
            </div>
        </Link>
    </div>
);

export default SimpleProductCard;