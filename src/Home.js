import React from "react";
import homeImg from './img/homeimg.jpg'
import { Link } from 'react-router-dom'
import './style/Home.css'

export default function Home() {
    return(
        <>
            <div className="wrapper">
                <img className='home-img' src={homeImg}/>
                <div className='home-menu'>Healthy, flavorous and fast.</div>
                <Link to='/shopping-cart/menu'>
                    <div className='home-menu2'>Check our menu</div>
                </Link>
            </div>
        </>
    )
}