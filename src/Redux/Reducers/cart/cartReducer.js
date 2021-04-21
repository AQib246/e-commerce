import * as actionTypes from "../../Actions/actionTypes"
import { makeGroupOfItem, removeItem } from './cart.utils'
const initialState ={
    isHidden:true,
    cartItems:[],
}
export const Cart =(state=initialState,action)=>{
    switch(action.type){
       
        case actionTypes.CART_TOGGLER:

            return {...state,isHidden:!state.isHidden}

      case actionTypes.ADD_TO_CART:
          return{
              ...state,cartItems:makeGroupOfItem(state.cartItems,action.payload)
          }
          case actionTypes.CLEAR_ITEM_FROM_CART:
              return {...state,cartItems:state.cartItems.filter((item)=>item.id !== action.payload)}

          case actionTypes.REMOVE_ITEM_FROM_CART:
              return {...state,cartItems:removeItem(state.cartItems,action.payload)}


            default :
            return state;
    }

}