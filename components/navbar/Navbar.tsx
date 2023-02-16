import React from "react";
import NavbarItem from "@/components/navbar/NavbarItem";
import Image from "next/image";
import logo from "public/logo.png"
import NavbarButton from "@/components/navbar/NavbarButton";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => (
    <div className='navbar'>
        <div className="navbarItemContainer">
            <Image className='logo' src={logo} alt='logo aplikacji'/>
        </div>
        <div className='navbarItemContainer'>
            <NavbarItem label='Discover' url='/'/>
            <NavbarItem label='About us' url='/'/>
            <NavbarItem label='Contact us' url='/'/>
        </div>
        <div className='navbarItemContainer'>
            <NavbarButton icon={<FontAwesomeIcon icon={faUser}/>}/>
            <NavbarButton url='/'
                          icon={<FontAwesomeIcon icon={faCartShopping}/>}/>
        </div>
    </div>
);

export default Navbar;