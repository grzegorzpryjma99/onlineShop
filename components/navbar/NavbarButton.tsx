import React from "react";
import Link from "next/link";

interface NavbarButtonProps {
    icon: JSX.Element
    url?: string
}

const NavbarButton = (props: NavbarButtonProps) => (
    <>
        {props.url ?
            <div className=''>
                <Link href={props.url}>
                    <button>{props.icon}</button>
                </Link>
            </div>
            :
            <div className=''>
                <button>{props.icon}</button>
            </div>
        }
    </>
);

export default NavbarButton;