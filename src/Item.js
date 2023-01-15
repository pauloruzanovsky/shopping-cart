import React from 'react';


export default function Item(props) {
    return(
        <div className='item' onClick={props.handleClick}>
            <img src={props.img} width='200px'></img>
            <div>{props.name}</div>        
        </div>
)
}