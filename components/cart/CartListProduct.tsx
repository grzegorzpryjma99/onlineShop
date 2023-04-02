import React, {useState} from "react";
import Image from "next/image";
import productPlaceholder from '/public/productPlaceholder.png'
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";
import UnderlineButton from "@/components/common/button/UnderlineButton";
import CartService from "@/service/cartService";
import {Product} from "@/components/products/types/types";
import Link from "next/link";

interface ProductCartProps {
    product: Product
    quantity: number
}

const CartListProduct = (props: ProductCartProps) => {

    const [value, setValue] = useState<number>(props.quantity);
    const {removeProductFromCart, updateQuantity} = CartService();

    const updateProduct = (quantity: number) => {
        updateQuantity(props.product, quantity)
    }

    return <div className='cart-product-container'>
        <div className='list-one'>
            <Link href={'/produkt/' + props.product.id}><Image
                src={productPlaceholder}
                alt='Zdjecie produktu'
            /></Link>
            <div className='cart-product-container-product-action'>
                <Link href={'/produkt/' + props.product.id}><h3>{props.product.name}</h3></Link>
                <UnderlineButton label='Remove' actionFunction={() => removeProductFromCart(props.product.id)}/>
            </div>
        </div>
        <div className='list-two'>
            <p>{props.product.price} PLN</p>
        </div>
        <div className='list-three'>
            <InputNumber value={value}
                         className='count-input'
                         onValueChange={(e: InputNumberValueChangeEvent) => {
                             setValue(e.value || 1)
                             updateProduct(e.value || 1)
                         }}
                         showButtons
                         inputStyle={{
                             width: '48px',
                             borderTopColor: 'rgb(86, 178, 128)',
                             borderBottomColor: 'rgb(86, 178, 128)',
                             textAlign: 'center'
                         }}
                         min={1}
                         buttonLayout="horizontal"
                         incrementButtonIcon="pi pi-plus"
                         decrementButtonIcon="pi pi-minus"/>
        </div>
        <div className='list-four'>
            {props.product.price * props.quantity} PLN
        </div>
    </div>
}

export default CartListProduct;