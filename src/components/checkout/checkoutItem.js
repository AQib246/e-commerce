import React from 'react';
import {connect} from 'react-redux'
import "./checkoutItem.styles.scss"
import {  clearItemFromCart, removeItemFromCart, addToCart } from '../../Redux/Actions/cartAction';


 const CheckOutItem =({clearCartItem,removeItem,addItem,cartItem})=>{
  const {name,imageUrl,price,quantity,id}=cartItem;
 return (
   <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
    <span className="arrow" onClick={()=>removeItem(id)} >&#10094;</span>
    {quantity}
    <span className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</span>
    </span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={()=>clearCartItem(id)}>&#10005;</div>
  </div>
)}


const mapDispatchToProps =(dispatch)=>({
  clearCartItem:(itemId)=>dispatch(clearItemFromCart(itemId)),
  removeItem:(item)=>dispatch(removeItemFromCart(item)),
  addItem:(item)=>dispatch(addToCart(item))
  })
  
export default connect(null,mapDispatchToProps)(CheckOutItem);