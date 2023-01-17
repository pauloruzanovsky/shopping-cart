import React from 'react';
import { useParams, Link } from 'react-router-dom'
import './style/ItemPage.css'
import {items} from './Menu'

export default function ItemPage(props) {

    const {id} = useParams();

    return(
        <div className="wrapper">
        <div className='itemPage' >
            <img src={items[id].img} width='600px' alt='food'/>
            <div className='item-details' id={items[id].id}>
                <div className='item-name'>{items[id].name}</div>
                <div className='item-ingredients'>{items[id].ingredients}</div>
                <div className='item-calories'>Calories: {items[id].calories}</div>
                <div className='item-proteins'>Proteins: {items[id].proteins}</div>
                <div className='item-carbs'>Carbs: {items[id].carbs}</div>
                <div className='item-fats'>Fats: {items[id].fats}</div>
                <div className='item-fibers'>Fibers: {items[id].fibers}</div>
                <div className='item-price'>${items[id].price}</div>
                <div className='buttons'>
                    <button onClick={props.addToBag}>Add to bag</button>
                    <Link to="/shopping-cart/menu">
                        <button>Back to menu</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
)
}