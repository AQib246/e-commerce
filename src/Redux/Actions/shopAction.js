import * as actionTypes from '../Actions/actionTypes'
import { firestore, convertCollectionSnapshotToMap } from '../../Firebase/firebaseConfig'

export  const   onFetchSuccess =(shopCollection)=>({
    type:actionTypes.ON_FETCH_SUCCESS,
    payload:shopCollection,
})

export  const   onFetchStart =()=>({
    type:actionTypes.ON_FETCH_START,
})

export const onFetchFailure =(errorMess)=>({
    type:actionTypes.ON_FETCH_FAILURE,
    payload:errorMess
})


export const fetchingCollectionAsync= ()=>(dispatch)=>{
    const collectionRef = firestore.collection("collections");
    dispatch(onFetchStart())
    collectionRef.get().then(
        (snapshot)=>{
            const coll = convertCollectionSnapshotToMap(snapshot)
                   dispatch(onFetchSuccess(coll))
        }
    ).catch((error)=>dispatch(onFetchFailure(error.message)))
}
