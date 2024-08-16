import {useState} from "react";
export default function UsernameForm(){
    const[username,setUsername]=useState("Harsha!!");
    const updateUsername=(evt)=>{
        setUsername(evt.target.value);
    };
    return(
        <div>
            <label htmlFor="username">Enter a Username</label>
            <input type="text" placeholder="Username" value={username} onChange={updateUsername} id="username"/>
            <button>Submit</button>
        </div>  
    );
}