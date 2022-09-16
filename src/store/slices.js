import { combineReducers } from 'redux'

import recipesReducer from './reducer'

const rootReducer = combineReducers({
  recipes: recipesReducer,
})

export default rootReducer