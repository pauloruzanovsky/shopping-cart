import React from "react";
import homeImg from './img/homeimg.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <>
            <div className="wrapper">
                <img className='home-img' src={homeImg}/>
                <div className='home-menu'>Healthy, flavorous and fast.</div>
                <Link to='/menu'>
                    <div className='home-menu2'>Check our menu</div>
                </Link>
            </div>
        </>
    )
}