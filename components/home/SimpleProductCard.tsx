import React from "react";
import Image from "next/image";
import productPlaceholder from "public/productPlaceholder.png"
import Link from "next/link";

interface SimpleProductCardProps {
    id: number
    name: string
    price: number
}

const SimpleProductCard = (props: SimpleProductCardProps) => (
    <div className='productCard'>
        <Link href={'/produkt/' + props.id} >
            <Image src={productPlaceholder}
                   alt='zdjecie produktu'
                // layout='fill'
                   objectFit='contain'
                   style={{background: '#F7F8FA', position: 'inherit', width: '100%'}}
            />
            {/*<p>dsadas</p>*/}
            <div className='product-card-details'>
                <p className='subject' id='product-name'>{props.name}</p>
                <p className='mentor' id='product-price'>{props.price} PLN</p>
            </div>
        </Link>

    </div>
);

export default SimpleProductCard;