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
            <Image src={getImageById(props.id)}
                   alt='zdjecie produktu'
                   objectFit='contain'
                   style={{background: '#F7F8FA', position: 'inherit', width: '100%'}}
            />
            <div className='product-card-details'>
                <p className='subject' id='product-name'>{props.name}</p>
                <p className='mentor' id='product-price'>{props.price} PLN</p>
            </div>
        </Link>
    </div>
);

export default SimpleProductCard;