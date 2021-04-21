import * as actionTypes from "../../Actions/actionTypes"

const InitialState ={
    currentUser:null,
  
}

export const User =(state=InitialState,action)=>{
    switch(action.type){
              case actionTypes.SET_CURRENT_USER:
        return {...state,currentUser:action.payload};
            
            default :
              return state

    }
}