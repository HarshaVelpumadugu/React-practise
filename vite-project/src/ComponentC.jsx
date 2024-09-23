import React from 'react';
import ComponentD from './ComponentD.jsx';

function ComponentC() {
  return (
    <div className='box'>
        <h1>ComponentC</h1> 
        <ComponentD/>       
    </div>
  )
}

export default ComponentC;