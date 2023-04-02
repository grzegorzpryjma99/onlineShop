import { useContext } from 'react';
import { Product } from '@/components/products/types/types';
import { Cart } from '@/components/cart/types';
import { useCartContext } from '@/service/CartProvider';

const useCart = (): {
    cart: Cart;
    addProductToCart: (product: Product, quantity: number) => void;
    updateQuantity: (product: Product, quantity: number) => void;
    removeProductFromCart: (id: number) => void;
    getCart: () => Cart;
    countProducts: () => number;
} => {
    const { cart, setCart } = useCartContext();

    const addProductToCart = (product: Product, quantity: number) => {
        const productExists = cart.products.some((el) => el.product.id === product.id);
        if (!productExists) {
            setCart({
                ...cart,
                products: [
                    ...cart.products,
                    {
                        product,
                        quantity,
                        totalAmount: product.price * quantity,
                    },
                ],
            });
        } else {
            const updatedProducts = cart.products.map((item) => {
                if (item.product.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                        totalAmount: (item.quantity + quantity) * item.product.price,
                    };
                } else {
                    return item;
                }
            });
            setCart({ ...cart, products: updatedProducts });
        }
    };

    const updateQuantity = (product: Product, quantity: number) => {
        const updatedProducts = cart.products.map((item) => {
            if (item.product.id === product.id) {
                return {
                    ...item,
                    quantity,
                    totalAmount: quantity * item.product.price,
                };
            } else {
                return item;
            }
        });
        setCart({ ...cart, products: updatedProducts });
    };

    const removeProductFromCart = (id: number) => {
        const updatedProducts = cart.products.filter((item) => item.product.id !== id);
        setCart({ ...cart, products: updatedProducts });
    };

    const getCart = (): Cart => {
        return cart;
    };

    const countProducts = (): number => {
        let counter: number = 0;
        cart.products.map((product) => (counter += product.quantity));
        return counter;
    };

    return {
        cart,
        addProductToCart,
        updateQuantity,
        removeProductFromCart,
        getCart,
        countProducts,
    };
};

export default useCart;
