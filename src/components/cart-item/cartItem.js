import React from 'react'
import "./cartItem.styles.scss";

export const CartItem =({item})=>{
    const {imageUrl,price,name,quantity} =item;
    return(
        <div className="cart-item">
       <img src={imageUrl} alt={name}/>
<div className="item-details">
    <span className="name">
        {name}
    </span>
    <span name="price">
        {quantity} * ${price}
    </span>
    </div>          
        </div>
    )
}