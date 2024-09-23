import React from 'react';
import { useContext } from 'react';
import { userContext } from './ComponentA.jsx';

function ComponentD() {
  const user= useContext(userContext);
  return (
    <div className='box'>
        <h1>ComponentD</h1> 
        <h2>{`bye ${user}`}</h2>       
    </div>
  )
}

export default ComponentD;