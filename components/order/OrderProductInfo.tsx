import React from "react";
import Image from "next/image";
import {CartProduct} from "@/components/cart/types/types";
import {getImageById} from "@/lib/imageHelper";
import Link from "next/link";

interface BuyingProductInfoProps {
    cartProduct: CartProduct
}

const OrderProductInfo = (props: BuyingProductInfoProps) => (
    <div className='buying-product-info-wrapper'>
        <Link href={'/produkt/' + props.cartProduct.product.id}>
            <Image priority src={getImageById(props.cartProduct.product.id)} alt='zdjecie produktu'/>
        </Link>
        <div>
            <h2>{props.cartProduct.product.name}</h2>
            <span>{props.cartProduct.quantity} {props.cartProduct.quantity === 1 ? 'piece' : 'pieces'}</span>
            <p className='price'>{props.cartProduct.totalAmount.toFixed(2)} PLN</p>
        </div>
    </div>
);

export default OrderProductInfo;