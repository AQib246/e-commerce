import React from 'react';
import {connect} from 'react-redux'
import { selectCartTotal, selectCartItem } from '../../Redux/Reducers/cart/cartSelector';
import CheckOutItem from '../../components/checkout/checkoutItem';
import "./checkOutPage.styles.scss";
import StripeButton from '../../components/stripe-button/stripeButton';

 const Checkout =({cartItemTotal,cartItems,removeCartItem})=>(
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
    <CheckOutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${cartItemTotal}</div>
  <StripeButton price={cartItemTotal}/>
  </div>
)

const mapStateToProps =(state)=>({
 
    cartItemTotal:selectCartTotal(state),
    cartItems:selectCartItem(state)

})

export default connect(mapStateToProps)(Checkout);