import React from 'react';
import { useSelector } from 'react-redux';
import { recipesSelector } from '../../store/reducer';
//import { Test } from './Secound.styles';

const Secound = (props) => {
  const { recipes, loading, hasErrors } = useSelector(recipesSelector)	

  return(
  <div className="SecoundWrapper">
    Test content
    {loading}
    <ul>
      {
        recipes.map((data)=>{
          return(<React.Fragment key={data.age +'00'}>
          <li >
            {data.name}
          </li>
          </React.Fragment>)
        })
      }
    </ul>
  </div>
)};



export default Secound
