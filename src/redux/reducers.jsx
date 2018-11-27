import {combineReducers} from 'redux';
import {soupReducer}from './soupredux';
import {commentReducer}from './comment'

export default combineReducers({soupReducer,commentReducer});