import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Badge} from "primereact/badge";
import useCart from "@/service/useCart";

interface NavbarButtonProps {
    piIconName: string
    url?: string
    showBadge: boolean
}

const NavbarButton = (props: NavbarButtonProps) => {

    const {countProducts} = useCart();
    const [productCounter, setProductCounter] = useState<number>(countProducts);

    useEffect(() => {
        setProductCounter(countProducts);
    }, [countProducts])

    return <>
        {props.url
            ? <div className=''>
                <Link href={props.url}>
                    <button className='navbar-button'><i className={`pi ${props.piIconName} p-overlay-badge`} style={{fontSize: '1.6rem'}}>
                        {props.showBadge && productCounter !== 0 && <Badge value={productCounter}/>}
                    </i></button>
                </Link>
            </div>
            : <div className=''>
                <button className='navbar-button'>{props.piIconName}</button>
            </div>
        }
    </>
}

export default NavbarButton;