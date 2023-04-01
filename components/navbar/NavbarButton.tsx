import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Badge} from "primereact/badge";
import CartService from "@/service/cartService";

interface NavbarButtonProps {
    piIconName: string
    url?: string
    showBadge: boolean
}

const NavbarButton = (props: NavbarButtonProps) => {

    const {countProducts} = CartService();
    const [productCounter, setProductCounter] = useState<number>(0);


    useEffect(() => {
        setProductCounter(countProducts);
        console.log(productCounter)
    }, [countProducts])

    return <>
        {props.url
            ? <div className=''>
                <Link href={props.url}>
                    <button><i className={`pi ${props.piIconName} p-overlay-badge`} style={{fontSize: '1.6rem'}}>
                        {props.showBadge && productCounter !== 0 && <Badge value={productCounter}/>}
                    </i></button>
                </Link>
            </div>
            : <div className=''>
                <button>{props.piIconName}</button>
            </div>
        }
    </>
}

export default NavbarButton;