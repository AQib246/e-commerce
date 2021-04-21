import *as actionTypes from './actionTypes'

export const  setCurrentUser =(user)=>({
type:actionTypes.SET_CURRENT_USER,
payload:user
})



export const signInToggler =()=>({
    type:actionTypes.SIGN_IN_TOGGLER
})

export const loginAsManufacture =()=>({
    type:actionTypes.SIGN_IN_AS_MANUFACTURE
})

export const loginAsInvestor =()=>({
    type:actionTypes.SIGN_IN_AS_INVESTOR
})