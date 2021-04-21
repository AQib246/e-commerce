import React from 'react';
import {ReactComponent as Icon } from '../../assets/shopping-bag.svg'
import "./cartIcon.styles.scss"
import {connect} from 'react-redux';
import { cartToggler } from '../../Redux/Actions/cartAction';
import { selectCartItemCount } from '../../Redux/Reducers/cart/cartSelector';

const mapDispatchToProps =(dispatch)=>({
  cartToggler:()=>dispatch(cartToggler())
})



const CartIcon = ({cartToggler,cartItemCount}) => {
  return (

    <div className='cart-icon' onClick={cartToggler}>
    {/* {console.log("cart icon",cartItemCount)} */}
      <Icon className="shopping-icon" />
         <span className="item-count">{cartItemCount}</span> 
    </div>
  )
}

const mapStateToProps =(state)=>{
console.log("mapstatetoprops",state)
return {
 cartItemCount:selectCartItemCount(state)

}}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);