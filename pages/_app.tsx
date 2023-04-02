import '@/styles/globals.css'
import '@/styles/footer.css'
import '@/styles/home.css'
import '@/styles/navbar.css'
import '@/styles/product.css'
import '@/styles/cart.css'
import '@/styles/order.css'
import '@/styles/info.css'
import '@/styles/login.css'
import type {AppProps} from 'next/app'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


config.autoAddCss = false

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}
