import React from "react";
import {Product} from "@/components/products/types/types";
import CartListProduct from "@/components/cart/CartListProduct";

interface ProductCartProps {
    product: Product[]
}

const CartList = (props: ProductCartProps) => (
    <div className='cart-list'>
        <div className='cart-headers'>
            <p className='list-one'>Product</p>
            <p className='list-two'>Price</p>
            <p className='list-three'>Quantity</p>
            <p className='list-four'>Total</p>
        </div>
        {props.product.map((product: Product) => {
            return <CartListProduct key={product.id} id={product.id} name={product.name} price={product.price}/>
        })}
    </div>
);

export default CartList;