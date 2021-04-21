export const makeGroupOfItem =(cartItems,itemToAddInCart)=>{

const existingItem = cartItems.find(
    cartItem=>cartItem.id=== itemToAddInCart.id );
    console.log("existing item",existingItem)
    if(existingItem){

        return  cartItems.map((item)=>(
        
            item.id === itemToAddInCart.id ? 
            
            {...item,quantity:item.quantity + 1}:item

        ))

    }
    
    return [...cartItems,{...itemToAddInCart,quantity:1}]

}
export const removeItem =(cartItems,itemToRemoveId)=>{
const existingItem = cartItems.find((cartItem)=>cartItem.id===itemToRemoveId)

if(existingItem.quantity===1){
  return cartItems.filter((cartItem)=>cartItem.id !== itemToRemoveId)


}

 return cartItems.map((cartItem)=>
      cartItem.id===itemToRemoveId ?
     ({...cartItem,quantity:cartItem.quantity -1}) :
     (cartItem)
 )

}