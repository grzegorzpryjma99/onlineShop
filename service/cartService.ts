import {Product} from "@/components/products/types/types";
import {Cart} from "@/components/cart/types";
import {useEffect} from "react";
import {useLocalStorage} from "primereact/hooks";

const CartService = () => {

    const [savedCart, setSavedCart] = useLocalStorage("", 'cart');

    useEffect(() => {
        console.log('serwisowy')
        if (savedCart === "") {
            let cart: Cart = {
                products: [],
                totalAmount: 0
            }
            setSavedCart(JSON.stringify(cart))
        }
    }, [savedCart]);

    const addProductToCart = (product: Product, quantity: number) => {
        let actualCart: Cart = JSON.parse(savedCart)

        const productExists = actualCart.products.some(el => el.product.id === product.id);
        if (!productExists) {
            actualCart.products.push({product: product, quantity: quantity, totalAmount: product.price * quantity});
        } else {
            let foundIndex = actualCart.products.findIndex(x => x.product.id == product.id);
            let prevItem = actualCart.products[foundIndex];
            let newQuantity: number = prevItem.quantity + quantity;
            let newTotalAmount: number = product.price * newQuantity;
            console.log(newTotalAmount)
            actualCart.products[foundIndex] = {product: product, quantity: newQuantity, totalAmount: newTotalAmount};
        }
        reCalculateTotalAmountAndSave(actualCart)
    }

    const updateQuantity = (product: Product, quantity: number) => {
        let actualCart: Cart = JSON.parse(savedCart)

        const productExists = actualCart.products.some(el => el.product.id === product.id);
        if (productExists) {
            let foundIndex = actualCart.products.findIndex(x => x.product.id == product.id);
            let newQuantity = quantity;
            let newTotalAmount = product.price * newQuantity;
            actualCart.products[foundIndex] = {product: product, quantity: newQuantity, totalAmount: newTotalAmount};
        }
        reCalculateTotalAmountAndSave(actualCart)
    }

    const removeProductFromCart = (id: number) => {
        let actualCart: Cart = JSON.parse(savedCart)
        const objWithIdIndex = actualCart.products.findIndex((obj) => obj.product.id === id);
        if (objWithIdIndex > -1) {
            actualCart.products.splice(objWithIdIndex, 1);
        }
        reCalculateTotalAmountAndSave(actualCart)
    }

    const getCart = (): Cart => {
        let cart: Cart;
        if (savedCart) {
            cart = JSON.parse(savedCart);
        } else {
            cart = {
                products: [],
                totalAmount: 0
            }
        }
        return cart;
    }

    const reCalculateTotalAmountAndSave = (cart: Cart) => {
        let actualCart: Cart = cart
        let total = 0;
        actualCart.products.map(product => {
            total += product.totalAmount * product.quantity
        })
        actualCart.totalAmount = total;
        localStorage.setItem('cart', JSON.stringify(actualCart))
        setSavedCart(JSON.stringify(actualCart))
    }

    return {
        addProductToCart,
        getCart,
        removeProductFromCart,
        updateQuantity,
        savedCart,
    }
};

export default CartService;