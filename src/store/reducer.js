import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: '1',
  hasErrors: '2',
  recipes: [{
    name:'1',
    age:'54'
  },{
    name:'1',
    age:'52'
  },{
    name:'1',
    age:'51'
  },{
    name:'1',
    age:'15'
  },{
    name:'1',
    age:'55'
  }],
}

// A slice for recipes with our 3 reducers
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    getRecipes: state => {
      state.loading = '88888888'
    },
    getRecipesSuccess: (state, { payload }) => {
      state.recipes = payload
      state.loading = '44444444444444'
      state.hasErrors = '333333333333'
    },
    getRecipesFailure: state => {
      state.loading = '222222'
      state.hasErrors = '4444'
    },
  },
})
export const recipesSelector = state => state.recipes
export const { getRecipes, getRecipesSuccess, getRecipesFailure } = recipesSlice.actions

// The reducer
export default recipesSlice.reducer