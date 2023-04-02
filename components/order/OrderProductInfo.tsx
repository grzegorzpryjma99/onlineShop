import React from "react";
import Image from "next/image";
import productPlaceholder from "/public/productPlaceholder.png"
import {CartProduct} from "@/components/cart/types";

interface BuyingProductInfoProps {
    product: CartProduct
}

const OrderProductInfo = (props: BuyingProductInfoProps) => (
    <div className='buying-product-info-wrapper'>
        <Image src={productPlaceholder} alt='zdjecie produktu'/>
        <div>
            <h2>{props.product.product.name}</h2>
            <span>{props.product.quantity} {props.product.quantity === 1 ? 'piece' : 'pieces'}</span>
            <p className='price'>{props.product.totalAmount} PLN</p>
        </div>
    </div>
);

export default OrderProductInfo;