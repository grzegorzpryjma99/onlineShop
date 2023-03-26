import React from "react";
import Image from "next/image";
import logo from "public/logo.png"
import Link from "next/link";

const Footer = () => (
    <div id="footer" className='footer'>
        <div className='footer-first-section'>
            <Image className='footer-logo' src={logo} alt='logo'/>
            <p>Your natural candle made for your home and for your wellness.</p>
        </div>
        <div className='footer-second-section'>
            <div className='footer-details'>
                <p className='subline'>Discovery</p>
                <ul>
                    <Link href='/'>
                        <li>New season</li>
                    </Link>
                    <Link href='/'>
                        <li>Most searched</li>
                    </Link>
                    <Link href='/'>
                        <li>Most selled</li>
                    </Link>
                </ul>
            </div>
            <div className='footer-details'>
                <p className='subline'>About</p>
                <ul>
                    <Link href='/'>
                        <li>New season</li>
                    </Link>
                    <Link href='/'>
                        <li>Most searched</li>
                    </Link>
                    <Link href='/'>
                        <li>Most selled</li>
                    </Link>
                </ul>
            </div>
            <div className='footer-details'>
                <p className='subline'>Info</p>
                <ul>
                    <Link href='/'>
                        <li>New season</li>
                    </Link>
                    <Link href='/'>
                        <li>Most searched</li>
                    </Link>
                    <Link href='/'>
                        <li>Most selled</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
);

export default Footer;