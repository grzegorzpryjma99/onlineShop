import React from "react";
import Link from "next/link";

interface NavbarItemProps {
    label: string,
    url: string
}

const NavbarItem = (props: NavbarItemProps) => (
    <div className='navItem'>
        <Link href={props.url}>{props.label}</Link>
    </div>
);

export default NavbarItem;