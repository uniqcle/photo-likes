import { combineReducers } from 'redux'
import { likesReducer } from './likesReducer'
import { inputReducer } from './inputReducer'
import { commentsReducer } from './commentsReducer';
import { loadReducer } from './loadReducer'

export const rootReducer = combineReducers({
    likesReducer,
    inputReducer,
    commentsReducer,
    loadReducer
})