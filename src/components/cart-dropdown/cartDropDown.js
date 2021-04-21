import React from 'react';
import './cartDropDown.styles.scss';
import CustomButton from '../custom-button/customButton';
import {connect} from 'react-redux'
import { CartItem } from '../cart-item/cartItem';
import { selectCartItem, selectCartTotal } from '../../Redux/Reducers/cart/cartSelector';
import {withRouter} from "react-router-dom"
import { cartToggler } from '../../Redux/Actions/cartAction';

const mapStateToProps =(state)=>({
  
cartItems:selectCartItem(state),
})

const CartDropdown = ({cartItems,history,dispatch}) => (
  <div className='cart-dropdown'>
    <div className="cart-items">
    
    {cartItems.length ?
   
   (cartItems.map(item=>(<CartItem key={item.id} item={item}/>)))
   
   :(<span className="cart-item-count">Your cart is empty</span>)
}
   <CustomButton onClick={()=>{
    history.push("/checkout")
    dispatch(cartToggler())}
    }>GO TO CHECKOUT</CustomButton> 
    
    </div>
</div>
);

export default withRouter(connect(mapStateToProps)(CartDropdown));