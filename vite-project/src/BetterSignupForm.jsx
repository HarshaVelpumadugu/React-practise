import {useState} from "react";
export default function BetterSignupForm(){
    const [formData,setFormData]=useState({firstName:"",lastName:"",password:""});
    const handleChange=(evt)=>{
        const changeField=evt.target.name;
        const newValue=evt.target.value;
        setFormData((currData)=>{
            return {...currData,[changeField]: newValue};
        });
    };
    const handleSubmit=()=>{
        console.log(formData);
    };
    return(
        <div>
            <label htmlFor="firstname">FirstName</label>
            <input type="text" placeholder="firstname"
            value={formData.firstName}
            onChange={handleChange}
            id="firstName"
            name="firstName"/>
            <label htmlFor="lastname">LastName</label>
            <input type="text" placeholder="lastname"
            value={formData.lastName}
            onChange={handleChange}
            id="lastName"
            name="lastName"/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            name="password"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}