import React from "react";
import {Product} from "@/components/products/types/types";
import CartListProduct from "@/components/cart/CartListProduct";
import {CartProduct} from "@/components/cart/types";

interface ProductCartProps {
    product: CartProduct[]
}

const CartList = (props: ProductCartProps) => (
    <div className='cart-list'>
        <div className='cart-headers'>
            <p className='list-one'>Product</p>
            <p className='list-two'>Price</p>
            <p className='list-three'>Quantity</p>
            <p className='list-four'>Total</p>
        </div>
        {props.product.map((products: CartProduct) => {
            return <CartListProduct key={products.product.id} product={products.product} quantity={products.quantity}/>
        })}
    </div>
);

export default CartList;