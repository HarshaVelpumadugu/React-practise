import{useState,useEffect} from "react";
export default function Counting(){
    const[count,setCount]=useState(0);
    const[name,setName]=useState("");
    useEffect(function myEffect(){
        console.log("My Effect Was Called!");
    },[count] // only run this effect when count changes
    );
    const increment =()=>{
        setCount((c)=>c+1);
    };
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <h1>Name:{name}</h1>
            <input onChange={handleChange} type="text"/>
        </div>
    );
}