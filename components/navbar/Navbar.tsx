import React from "react";
import NavbarItem from "@/components/navbar/NavbarItem";
import Image from "next/image";
import logo from "public/logo.png"
import NavbarButton from "@/components/navbar/NavbarButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const Navbar = () => (
    <div className='navbar'>
        <div className="navbarItemContainer">
            <Link href='/'>
                <Image className='logo' src={logo} alt='logo aplikacji'/>
            </Link>
        </div>
        <div className='navbarItemContainer'>
            <NavbarItem label='Discover' url='/lista-produktow'/>
            <NavbarItem label='About us' url='/'/>
            <NavbarItem label='Contact us' url='/'/>
        </div>
        <div className='navbarItemContainer'>
            <NavbarButton icon={<FontAwesomeIcon icon={faUser}/>}/>
            <NavbarButton url='/koszyk'
                          icon={<FontAwesomeIcon icon={faCartShopping}/>}/>
        </div>
    </div>
);

export default Navbar;