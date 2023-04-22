import { combineReducers } from "redux"

import { nameFormReducer } from './nameForm/reducer.js'
import { postFormReducer } from './postForm/reducer.js'

const rootReducer = combineReducers({
    nameForm: nameFormReducer,
    postForm: postFormReducer
})

export default rootReducer