import React from 'react';
import  { Link, Routes, Route, useParms, useLocation } from 'react-router-dom'
import './style/BagIcon.css'
import foodBag from './img/foodBag.svg'

export default function BagIcon(props) {
    const location = useLocation();
    const [isVisible, setIsVisible] = React.useState(true);

    React.useEffect(() => {
        if (location.pathname === '/checkout') {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }, [location]);



    return(
        isVisible ? <div>
            <div className='bag-icon' onClick={props.hideBag}>
                <img className='food-bag-icon' src={foodBag}/>
                <div className='bag-count'>{props.bagCount}</div>
            </div>
        </div> :
        null
    )
}