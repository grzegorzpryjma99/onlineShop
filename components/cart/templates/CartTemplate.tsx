import Link from "next/link";
import ActionButton from "@/components/common/button/ActionButton";
import CartList from "@/components/cart/CartList";
import {useEffect, useState} from "react";
import {Product} from "@/components/products/types/types";
import UnderlineButton from "@/components/common/button/UnderlineButton";

export default function Home() {

    const [products, setProducts] = useState<Product[]>([])
    const [totalCost, setTotalCost] = useState<number>(0)

    useEffect(() => {
        setProducts([
            {
                id: 1,
                name: 'Produkt1',
                description: 'All hand-made with natural soy wax, Candleaf is made for your pleasure moments.',
                price: 99
            },
            {
                id: 1,
                name: 'Produkt1',
                description: 'All hand-made with natural soy wax, Candleaf is made for your pleasure moments.',
                price: 99
            },
        ])
    }, [])

    return (
        <div className='cart-container'>
            <h2 className='h2-title'>Your cart items</h2>
            <UnderlineButton label='Back to shopping' url='/'/>
            <CartList product={products}/>
            <div className='cart-sum-up-container'>
                <p>Sub-total</p>
                <p>{totalCost} PLN</p>
                <ActionButton label='Check-out' url='/zakupy'/>
            </div>
        </div>
    )
}