import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesSuccess, recipesSelector } from '../../store/reducer';

const Base = (props) => {
  const { recipes, loading, hasErrors } = useSelector(recipesSelector)	
  const dispatch = useDispatch()		
  useEffect(() => {
    dispatch(getRecipesSuccess([
      {
        name:'4444444444444444444444',
        age:'54444444444444444444444444444444'
      },{
        name:'2222222222221',
        age:'52222222222222222222222222222'
      },{
        name:'1444444444444444',
        age:'5144444444444444444444444444444444444444'
      },{
        name:'14333333333',
        age:'153333333333333333333333333333'
      },{
        name:'1333333333333333',
        age:'55'
      }
    ]))
  }, [dispatch])
  const ddd= ()=>{
    dispatch(getRecipesSuccess([
      {
        name:'4444444444444444444444',
        age:'54444444444444444444444444444444'
      }
    ]))
  }
  return(
  <div className="BaseWrapper">
    Test content
    <div>
      
      {hasErrors}
    </div>
    <button onClick={()=>{ddd()}}>
    ddd
    </button>
  </div>
)};

export default Base;
