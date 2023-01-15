import React from 'react';
import  { Link, Routes, Route, useParms } from 'react-router-dom'
import './style/Bag.css'
import foodBag from './img/foodBag.svg'

export default function Bag(props) {
    return(
        <div>
            <div className='bag'>
                <img className='food-bag-icon' src={foodBag}/>
                <div className='bag-count'>{props.bagCount}</div>
            </div>
        </div>
    )
}