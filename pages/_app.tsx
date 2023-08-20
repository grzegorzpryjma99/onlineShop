import '@/styles/globals.css';
import '@/styles/footer.css';
import '@/styles/home.css';
import '@/styles/navbar.css';
import '@/styles/product.css';
import '@/styles/cart.css';
import '@/styles/order.css';
import '@/styles/info.css';
import '@/styles/login.css';
// @ts-ignore
import type {AppProps, NextPageContext} from 'next/app';
import {config} from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import CartProvider, {initialCartState} from '@/service/CartProvider';
import {Cart} from "@/components/cart/types";
import {Poppins} from '@next/font/google'
import {BlockModal} from "@/components/common/BlockModal";

const poppins = Poppins({
    subsets: ['latin'],
    style: "normal",
    weight: ['400', '500', '600'],
})

config.autoAddCss = false;

interface MyAppProps extends AppProps {
    initialState: Cart;
}

MyApp.getInitialProps = async ({Component, ctx}: NextPageContext): Promise<MyAppProps> => {
    let initialState = initialCartState;
    if (ctx.req) {
        let xd = ctx.req.headers.cookie;
        const cartValue = decodeURIComponent(xd);
        if(cartValue){
            const cartJson = cartValue.split('cart=')[1];
            if(cartJson){
                initialState = JSON.parse(cartJson)
            }
        }
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
            <BlockModal/>
            <div className={poppins.className}>
                <Component {...pageProps} />
            </div>
        </CartProvider>
    );
}

export default MyApp;

