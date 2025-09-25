import {createstore, combineReducers} from 'redux';
import reducer from "./reducer.js"

const store = createstore(reducer);


export default store;
