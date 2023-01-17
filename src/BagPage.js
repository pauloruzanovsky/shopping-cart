import React from 'react';
import  { Link, Routes, Route, useParms } from 'react-router-dom'
import './style/BagPage.css'
import trash from './img/trash.svg';

export default function BagPage(props) {
    const [subtotal, setSubtotal] = React.useState(0);

    const decrement = (e) => {
        props.setBag(props.bag.map(item => {
            if(item.id === Number(e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id')) && item.quantity > 1) {
                return ({...item, quantity: item.quantity - 1})
            }   
            return(item)
        }))
    }
    const increment = (e) => {
            props.setBag(props.bag.map(item => {
                if(item.id === Number(e.target.parentNode.parentNode.parentNode.parentNode.getAttribute('id'))) {
                    return ({...item, quantity: item.quantity + 1})
                }   
                return(item)
            }))
        }

    const deleteItem = (e) => {
        let newBag = []
        console.log(e.target.parentNode.parentNode.parentNode)
        props.bag.forEach(item => {
            if(!(item.id === Number(e.target.parentNode.parentNode.parentNode.getAttribute('id')))) {
                newBag.push(item)
            }   
        })
        props.setBag([...newBag])
    }
    
    const updateSubtotal = () => {
        let newSubtotal = 0;
        props.bag.forEach(item => {
            console.log('item: ',item, item.quantity)
            newSubtotal = newSubtotal + (item.quantity * item.price)
            console.log('newSubtotal: ',newSubtotal)
        })
        setSubtotal(newSubtotal)
    }

    React.useEffect(() => {
        updateSubtotal()
    },[props.bag])
    
    let bagElements = props.bag.map(item => 
        <div className='bag-item' id={item.id}>
            <img src={item.img} width='100px'/>
            <div className='bag-item-details'>
                <div className='bag-item-1st-row'>
                    <div className='bag-item-name'>{item.name}</div>
                    <img src={trash} className='delete-bag-item' onClick={deleteItem}/>
                </div>
                <div className='counter-price'>
                    <div className='quantity-counter'>
                        <button onClick={decrement}>-</button>
                        <div className='bag-item-quantity'>{item.quantity}</div>
                        <button onClick={increment}>+</button>
                    </div>
                    <div className='total-price'>${item.price * item.quantity}</div>
                </div>
            </div>
        </div>
)

    return(
            <div className='bag-page'>
                {bagElements.length ? bagElements : 'Your bag is empty!'}
                {bagElements.length ? <div className='subtotal'>Subtotal: ${subtotal} </div> : <div></div>}
                <Link to='/shopping-cart/checkout'>
                <button onClick={props.hideBag}>{"Checkout =>"}</button>
                </Link>
                    <button onClick={props.hideBag}>{"<= Keep shopping"}</button>
            </div>
    )
}