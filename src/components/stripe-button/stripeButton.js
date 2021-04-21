import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const onToken =(token)=>{
console.log(token)
}

const StripeButton =({price})=>{

   const priceForStripe= price*100;
   const publishKey ="pk_test_xdaBXOZP6O0djYVxr5odbIJE00FQwCF2Cu";
    
   return(
     <StripeCheckout
     name="clothing company"
     label="PAY NOW"
     billingAddress
     shippingAddress
     description={`Your total amount is $${price}`}
     amount={priceForStripe}
     panelLabel="PAY NOW"
     token={onToken}
     stripeKey={publishKey}
    //  image="http://svgshare.com/i/CUz.svg"
     />  
    )
}

export default StripeButton;