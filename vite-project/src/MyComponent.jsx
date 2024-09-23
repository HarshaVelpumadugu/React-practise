import React,{useState,useEffect,useRef}from 'react'

function MyComponent(){
  const inputRef=useRef(null);

  useEffect(()=>{
    console.log('component rendered');
    console.log(inputRef);
  });

  function handleClick(){
    inputRef.current.focus();
    inputRef.current.style.backgroundColor="blue";
  }
  return (
    <div>
        <button onClick={handleClick}>
           Click Me!
        </button>
        <input ref={inputRef}/>
    </div>
  );
}

export default MyComponent;