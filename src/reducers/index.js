// src/reducers/index.js
import productsReducersFromAction from './productsReducers';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    productsReducersFromAction
});
export default rootReducer;