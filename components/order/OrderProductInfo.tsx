import React from "react";
import {Product} from "@/components/products/types/types";
import CartListProduct from "@/components/cart/CartListProduct";
import Image from "next/image";
import productPlaceholder from "/public/productPlaceholder.png"

interface BuyingProductInfoProps {
    product: Product
}

const OrderProductInfo = (props: BuyingProductInfoProps) => (
    <div className='buying-product-info-wrapper'>
        <Image src={productPlaceholder} alt='zdjecie produktu'/>
        <div>
            <h2>{props.product.name}</h2>
            <p>{props.product.price} PLN</p>
        </div>
    </div>
);

export default OrderProductInfo;