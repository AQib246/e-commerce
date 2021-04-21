import {createStore,applyMiddleware, combineReducers} from 'redux'
import {logger} from 'redux-logger'
import {persistReducer} from 'redux-persist'
import {persistStore} from "redux-persist"
import storage from 'redux-persist/lib/storage'
import {Cart} from './Reducers/cart/cartReducer';
import {User} from "./Reducers/user/userReducer"
import { Directory } from './Reducers/directory/directory'
import { Shop } from './Reducers/shop/shop'
import thunk from 'redux-thunk'

const middleware =[thunk,logger];



const rootReducer = combineReducers({
    user:User,

    cart:Cart,

    directory:Directory,

    shop:Shop
});


const persistConfig ={
    key:"root",
    storage,
    whitelist:["cart"]
} 


export const reducerPersistor =persistReducer(persistConfig,rootReducer,);

export var store = createStore(reducerPersistor,

    applyMiddleware(...middleware)
)


export const persistor = persistStore(store);


