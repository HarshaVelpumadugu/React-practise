import {useState} from "react";
export default function SignupForm(){
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const updateFirstname=(evt)=>{
        setFirstname(evt.target.value);
    };
    const updateLastname=(evt)=>{
        setLastname(evt.target.value);
    };
    return(
        <div>
            <label htmlFor="firstname">Enter a Firstname</label>
            <input type="text" placeholder="Firstname" value={firstname} onChange={updateFirstname} id="firstname"/>
            <label htmlFor="lastname">Enter a Lastname</label>
            <input type="text" placeholder="Lastname" value={lastname} onChange={updateLastname} id="lastname"/>
            <button>Submit</button>
        </div>  
    );
}