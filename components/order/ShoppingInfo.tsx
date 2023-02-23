import React from "react";
import {Product} from "@/components/products/types/types";
import OrderProductInfo from "@/components/order/OrderProductInfo";

interface ShoppingInfoProps {
    products: Product[]
}

const ShoppingInfo = (props: ShoppingInfoProps) => {

    return <div className='shopping-info-wrapper'>
        <div className='shopping-product-section'>
            {props.products.map((product: Product) => {
                return <OrderProductInfo product={product}/>
            })}
        </div>
        <div>
            <div className='shopping-info-section'>
                <p>Tu jakiś input z kuponem</p>
            </div>
            <div className='shopping-info-section'>
                <p>Subtotal</p>
                <p>10 PLN</p>
            </div>
            <div className='shopping-info-section'>
                <p>Total</p>
                <p>10 PLN</p>
            </div>
        </div>
    </div>
}

export default ShoppingInfo;