import * as actionTypes from './actionTypes'

export const cartToggler =()=>({
    type:actionTypes.CART_TOGGLER
})

export const addToCart =(item)=>({
  type:actionTypes.ADD_TO_CART,
  payload:item
})

export const clearItemFromCart =(itemId)=>({
  type:actionTypes.CLEAR_ITEM_FROM_CART,
  payload:itemId

})

 export const removeItemFromCart =(itemId)=>({
   type:actionTypes.REMOVE_ITEM_FROM_CART,
   payload:itemId
 })