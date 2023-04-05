import '@/styles/globals.css';
import '@/styles/footer.css';
import '@/styles/home.css';
import '@/styles/navbar.css';
import '@/styles/product.css';
import '@/styles/cart.css';
import '@/styles/order.css';
import '@/styles/info.css';
import '@/styles/login.css';
import type {AppProps} from 'next/app';
import type {NextPageContext} from 'next/dist/next-server/lib/utils';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import CartProvider, {initialCartState} from '@/service/CartProvider';
import {Cart} from "@/components/cart/types";
import {ProductCategory} from "@/components/products/types/types";

config.autoAddCss = false;

interface MyAppProps extends AppProps {
    initialState: Cart;
}

MyApp.getInitialProps = async ({Component, ctx}: NextPageContext): Promise<MyAppProps> => {
    // const initialState = await fetchCartData();
    let initialState = initialCartState;
    if (ctx.req) {
        let xd = ctx.req.headers.cookie;
        const cartValue = decodeURIComponent(xd);
        const cartJson = cartValue.split('cart=')[1];
        initialState = JSON.parse(cartJson)
    }
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return {Component, pageProps, initialState, router: ctx.router};
};

function MyApp({Component, pageProps, initialState = initialCartState}: MyAppProps) {
    return (
        <CartProvider initialState={initialState}>
            <Component {...pageProps} />
        </CartProvider>
    );
}

async function fetchCartData(): Promise<Cart> {
    return {
        products: [
            {
                product: {
                    id: 2,
                    name: "Produkt1",
                    description: "All hand-made with natural soy wax, Candleaf is made for your pleasure moments.",
                    price: 99,
                    category: ProductCategory.HOME
                },
                quantity: 1,
                totalAmount: 99
            }
        ],
        totalAmount: 0
    };
}

export default MyApp;

