import React from "react";
import Image from "next/image";
import logo from "public/logo.png"
import Link from "next/link";

const Footer = () => (
    <div id="footer" className='footer'>
        <div className='footer-first-section'>
            <Image priority className='footer-logo' src={logo} alt='logo'/>
            <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className='footer-second-section'>
            <div className='footer-details'>
                <p className='subline'>Discovery</p>
                <ul>
                    <Link href='/lista-produktow'>
                        <li>New season</li>
                    </Link>
                    <Link href='/lista-produktow'>
                        <li>Most searched</li>
                    </Link>
                    <Link href='/lista-produktow'>
                        <li>Most selled</li>
                    </Link>
                </ul>
            </div>
            <div className='footer-details'>
                <p className='subline'>About</p>
                <ul>
                    <Link href='/404'>
                        <li>Help</li>
                    </Link>
                    <Link href='/404'>
                        <li>Shipping</li>
                    </Link>
                    <Link href='/404'>
                        <li>Affiliate</li>
                    </Link>
                </ul>
            </div>
            <div className='footer-details'>
                <p className='subline'>Info</p>
                <ul>
                    <Link href='/'>
                        <li>Contact us</li>
                    </Link>
                    <Link href='/'>
                        <li>Privacy Policies</li>
                    </Link>
                    <Link href='/'>
                        <li>Terms & Conditions</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
);

export default Footer;