import React from "react";
import avocadoToast from './img/avocadotoast.jpeg'
import fritatta from './img/fritatta.jpeg'
import quiche from './img/quiche.jpeg'
import cucumber from'./img/cucumber.jpeg'
import salad from './img/salad.jpeg'
import smoothie from './img/smoothie.jpeg'
import Item from './Item'
import './style/Menu.css'
import { Link } from 'react-router-dom'

export let items = [
    {
        id:0,
        name: 'Cucumber Sandwich',
        ingredients: 'Whole-wheat bread, cucumber, cream cheese, greek yogurt, chives, dill.',
        calories: 358,
        proteins: 12,
        carbs: 29,
        fibers: 4,
        fats: 22,   
        img: cucumber,
        price: 15     
    },
    {
        id:1,
        name: 'Spinach & Mushroom Quiche',
        ingredients: 'Olive oil, wild mushroom, onion, garlic, spinach, egg, milk, dijon mustard, thyme, gruyère cheese.',
        calories: 277,
        proteins: 17,
        carbs: 7,
        fibers: 2,
        fats: 20,   
        img: quiche,   
        price: 20  
    },
    {
        id:2,
        name: 'Mozzarella, Basil & Zucchini Frittata',
        ingredients: 'Olive oil, onion, zucchini, egg, mozzarella, tomato, basil.',
        calories: 292,
        proteins: 18,
        carbs: 8,
        fibers: 2,
        fats: 21,     
        img: fritatta,  
        price: 18 
    },
    {
        id:3,
        name: 'Avocado-Egg Toast',
        ingredients: 'Avocado, garlic powder, whole-wheat bread, egg, sriracha, scallion.',
        calories: 271,
        proteins: 12,
        carbs: 18,
        fibers: 5,
        fats: 18,     
        img: avocadoToast,
        price: 12
    },
    {
        id:4,
        name: 'Chickpea Tuna Salad',
        ingredients: 'Lemon juice, caper, shallot, chickpea, tuna, tomato, cucumber, feta cheese, dill, olive oil, spinach.',
        calories: 357,
        proteins: 21,
        carbs: 23,
        fibers: 6,
        fats: 19,     
        img: salad,
        price: 22
    },
    {
        id:5,
        name: 'Pineaple Green Smoothie',
        ingredients: 'Almond milk, greek yogurt, spinach, banana, pineapple, chia seed, honey.',
        calories: 297,
        proteins: 13,
        carbs: 54,
        fibers: 10,
        fats: 6,     
        img: smoothie,
        price: 10
    },

]

export function Menu() {

    let itemElements = items.map(item => 
        <Link style={{alignSelf:'start', justifySelf: 'center', display:'flex', justifyContent:'center'}}className='link' key={item.id} to={`/shopping-cart/menu/${item.id.toString()}`}>
            <Item
                id={item.id}
                name={item.name}
                img={item.img}
            />
        </Link>
    )

    return(
        <>
            <h1>Our Menu</h1>
                <div className='food-elements'>{itemElements}</div>
        </>
    )
}