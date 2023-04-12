import React from "react";
import Image from "next/image";
import image1 from "@/public/image 8.png"
import image2 from "@/public/image 7.png"
import image3 from "@/public/image 6.png"
import image4 from "@/public/image 5.png"
import image5 from "@/public/image 4.png"
import image6 from "@/public/image 3.png"
import image7 from "@/public/image 2.png"
import image8 from "@/public/image 1.png"
import Link from "next/link";

interface SimpleProductCardProps {
    id: number
    name: string
    price: number
}

let images = [image1, image2, image3, image4, image5, image6, image7, image8];

const SimpleProductCard = (props: SimpleProductCardProps) => (
    <div className='productCard'>
        <Link href={'/produkt/' + props.id}>
            <Image src={images[Math.floor((props.id - 1) % 8)]}
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