import React from "react";
import Link from "next/link";

interface NavbarButtonProps {
    icon: JSX.Element
    url?: string
}

const NavbarButton = (props: NavbarButtonProps) => (
    <>
        {props.url ?
            <div className='navItem'>
                <Link href={props.url}>
                    <button>{props.icon}</button>
                </Link>
            </div>
            :
            <div className='navItem'>
                <button>{props.icon}</button>
            </div>
        }
    </>
);

export default NavbarButton;