import ActionButton from "@/components/common/button/ActionButton";
import CartList from "@/components/cart/CartList";
import {useEffect, useState} from "react";
import UnderlineButton from "@/components/common/button/UnderlineButton";
import {Cart} from "@/components/cart/types";
import CartService from "@/service/cartService";

export default function CartTemplate() {

    const {getCart, savedCart} = CartService();
    const [cart, setCart] = useState<Cart>()

    useEffect(() => {
        setCart(getCart())
    }, [savedCart])

    // console.log(cart)
    return (
        <div className='cart-container'>
            <h2 className='h2-title'>Your cart items</h2>
            <UnderlineButton label='Back to shopping' url='/lista-produktow'/>
            <CartList product={cart?.products || []}/>
            <div className='cart-sum-up-container'>
                <p>Sub-total</p>
                <p>{cart?.totalAmount} PLN</p>
                <div className='cart-sum-up-button'>
                    <ActionButton style={{width: '50%', fontSize: '18px'}} label='Check-out' url='/zakupy'/>
                </div>
            </div>
        </div>
    )
}