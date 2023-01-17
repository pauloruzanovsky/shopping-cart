import React from 'react';
import './style/Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header>

            <ul>
                <Link className='link' to='/shopping-cart/menu'>
                    <li>Menu</li>
                </Link>
                <Link className='link' to='/shopping-cart'>
                    <div className="logo">FLAVORA</div>
                </Link>
                <Link className='link' to='/shopping-cart/about'>
                    <li>About</li>
                </Link>
            </ul>
        </header>
    )
}