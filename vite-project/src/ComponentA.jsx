import React from 'react'
import ComponentB from './ComponentB.jsx';
import { useState ,createContext} from 'react';

export const userContext=createContext();

function ComponentA() {
  const[user,setUser]=useState("Harsha");
  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>  
        <userContext.Provider value={user}>
            <ComponentB/>
        </userContext.Provider> 
        <ComponentB user={user}/>     
    </div>
  )
}

export default ComponentA;