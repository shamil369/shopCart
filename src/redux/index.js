import {combineReducers } from 'redux';
import { productReducer , selectedProductReducer, cartReducer , wishListReducer,signReducer} from './productReducer';

export const reducers = combineReducers({
    allProducts:productReducer,selectedProductReducer,cartReducer,wishListReducer,signReducer,
})