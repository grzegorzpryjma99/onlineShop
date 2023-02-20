import React from "react";
import Image from "next/image";
import productPlaceholder from '/public/productPlaceholder.png'

interface ProductCartProps {
        id: number
        name: string
        price: number
}

const CartListProduct = (props: ProductCartProps) => (
    <div className='cart-product-container'>
        <div className='list-one'>
            <Image
                   src={productPlaceholder}
                   alt='Zdjecie produktu'
            />
            <div>
                <h3>{props.name}</h3>
            </div>
        </div>
        <div className='list-two'>
            <p>{props.price} PLN</p>
        </div>
        <div className='list-three'>
            tu input
        </div>
        <div className='list-four'>
            total
        </div>
    </div>
);

export default CartListProduct;