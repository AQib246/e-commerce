import * as actionTypes from '../../Actions/actionTypes'

const initialState ={
    shopData:null,
    isLoading:false,
    errorMess:""
}

export const Shop =(state=initialState,action)=>{
    switch(action.type){

      case actionTypes.ON_FETCH_START:
          return{
              ...state, isLoading:true ,shopData:null,errorMess:""
          }

        case actionTypes.ON_FETCH_SUCCESS:
            return{
                ...state,shopData:action.payload,isLoading:false
            }

            case actionTypes.ON_FETCH_FAILURE:
                return {
                  ...state,isLoading:true,shopData:null,errorMess:action.payload   
                }


        default:
            return state
    }

}