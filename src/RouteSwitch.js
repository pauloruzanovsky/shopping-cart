import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Menu } from "./Menu";
import About from './About'; 
import Header from './Header';
import ItemPage from './ItemPage';
import BagIcon from './BagIcon';
import BagPage from './BagPage';
import CheckoutPage from './CheckoutPage';
import Footer from './Footer';
import React from 'react'
import { items } from './Menu'
import './style/RouteSwitch.css'

export default function RouteSwitch() {
    const [bag, setBag] = React.useState([]);
    const [bagCount, setBagCount] = React.useState(0);
    const [showBag, setShowBag] = React.useState(false);

    const addToBag = (e) => {
        setShowBag(true);
        if(!(bag.some(item => item.id === items[e.target.parentNode.parentNode.getAttribute('id')].id))) {
           return setBag([...bag,{...items[e.target.parentNode.parentNode.getAttribute('id')],quantity:1}])
        } 
        return (setBag(bag.map(item => {
            if(item.id === items[e.target.parentNode.parentNode.getAttribute('id')].id) {
                return({...item, quantity: item.quantity+1})
            }
            return(item)
        })))
        
    }

    const hideBag = () => {
        setShowBag(prevState => !prevState)
    }


    React.useEffect( () => {
        let newBagCount = 0;
        bag.forEach(item => {
            newBagCount = newBagCount + item.quantity
        })
        setBagCount(newBagCount)
      
    },[bag])


    return( 
        <BrowserRouter>
        <Header/>
        <BagIcon bagCount={bagCount} hideBag={hideBag}/>
        {showBag && <BagPage bag={bag} setBag={setBag} showBag={showBag} hideBag={hideBag}/>}
        {showBag && <div className='cover' onClick={hideBag}></div>}
            <Routes>
                <Route path='/shopping-cart' element={<Home/>}/>
                <Route path='/shopping-cart/menu' element={<Menu/>}/>
                <Route path='/shopping-cart/about' element={<About/>}/>
                <Route path='/shopping-cart/menu/:id' element={<ItemPage addToBag={addToBag}/>}/>
                <Route path='/shopping-cart/checkout' element={<CheckoutPage bag={bag} setBag={setBag} showBag={showBag} hideBag={hideBag}/>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )

}