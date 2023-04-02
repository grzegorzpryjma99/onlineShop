import React, {createContext, useContext, useEffect, useState} from 'react';
import {Cart} from '@/components/cart/types';
import Cookies from 'js-cookie';

type CartContextType = {
    cart: Cart;
    setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

interface CartProviderProps {
    children?: React.ReactNode;
}

const CartContext = createContext<CartContextType>({
    cart: {products: [], totalAmount: 0},
    setCart: () => {
    },
});

export const useCartContext = () => useContext(CartContext);

const CartProvider: React.FC<CartProviderProps> = ({children}) => {
    const [cart, setCart] = useState<Cart>(() => {
        const cartFromCookie = Cookies.get('cart');
        if (cartFromCookie) {
            return JSON.parse(cartFromCookie);
        }
        return {products: [], totalAmount: 0};
    });

    useEffect(() => {
        Cookies.set('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

