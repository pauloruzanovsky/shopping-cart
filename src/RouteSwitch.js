import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Menu } from "./Menu";
import About from './About'; 
import Header from './Header';
import ItemPage from './ItemPage';  
import Bag from './Bag';
import React from 'react'
import { items } from './Menu'

export default function RouteSwitch() {
    const [bag, setBag] = React.useState([]);
    const [bagCount, setBagCount] = React.useState(0);
    
    const addToBag = (e) => {
        setBag([...bag,items[e.target.parentNode.parentNode.getAttribute('id')]])

    }

    React.useEffect( () => {
        setBagCount(bag.length)
        console.log(bag)
        console.log(bag.length)
    },[bag])

    return( 
        <BrowserRouter>
        <Header/>
        <Bag bagCount={bagCount} />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/menu/:id' element={<ItemPage addToBag={addToBag}/>}/>
            </Routes>
        </BrowserRouter>
    )

}