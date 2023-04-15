import React from "react";
import NavbarItem from "@/components/navbar/NavbarItem";
import Image from "next/image";
import logo from "public/logo.png"
import NavbarButton from "@/components/navbar/NavbarButton";
import Link from "next/link";

const Navbar = () => (
    <div className='navbar'>
        <div className="navbarItemContainer">
            <Link href='/'>
                <Image priority className='logo' src={logo} alt='logo aplikacji'/>
            </Link>
        </div>
        <div className='navbarItemContainer'>
            <NavbarItem label='Discover' url='/lista-produktow'/>
            <NavbarItem label='Home' url='/'/>
            <NavbarItem label='About us' url='/nasze-produkty'/>
        </div>
        <div className='navbarItemContainer'>
            <NavbarButton showBadge={false} url='/logowanie' piIconName='pi-user'/>
            <NavbarButton showBadge={true} url='/koszyk' piIconName='pi-shopping-cart'/>
        </div>
    </div>
);

export default Navbar;