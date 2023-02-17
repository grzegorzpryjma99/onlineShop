import React from "react";
import Image from "next/image";
import productPlaceholder from "public/productPlaceholder.png"

interface SimpleProductCardProps {
    name: string
    price: number
}

const SimpleProductCard = (props: SimpleProductCardProps) => (
    <div className='productCard'>
        <Image src={productPlaceholder}
               alt='zdjecie produktu'
               // layout='fill'
               objectFit='contain'
               style={{background: '#F7F8FA', position: 'inherit'}}
        />
        {/*<p>dsadas</p>*/}
        <div className='product-card-details'>
            <p className='subject' id='product-name'>{props.name}</p>
            <p className='mentor' id='product-price'>{props.price} PLN</p>
        </div>
    </div>
);

export default SimpleProductCard;