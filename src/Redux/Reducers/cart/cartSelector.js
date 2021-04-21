import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    (cartItems)=>cartItems.reduce((accumlatedValue,cartItem)=>{
        return accumlatedValue +cartItem.quantity;
       },0)
)

export const selectCartTotal = createSelector(
    [selectCartItem],
    (cartItems)=> cartItems.reduce((accumlatedValue,cartItem)=>{
        return accumlatedValue + cartItem.quantity * cartItem.price
    },0)
)



