
import {useState} from "react";
export default function ShoppingListForm({addItem}){
    const[formData,setFormData]=useState({product:"",quantity:0});
    const handleChange=(evt)=>{
        const changeField=evt.target.name;
        const newValue=evt.target.value;
        setFormData((currData)=>{
            return {...currData,[changeField]: newValue};
        });
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("Submitted!!");
        addItem(formData);
        setFormData({product:"",quantity:0});
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>Product is:{formData.product} and quantity is:{formData.quantity}</h1>
            <label htmlFor="product">Product Name</label>
            <input
            type="text" placeholder="product name"
            name="product" id="product"
            onChange={handleChange}
            value={formData.product}/>
            <label htmlFor="quantity">Quantity</label>
            <input
            type="number" placeholder="1"
            name="quantity" id="quantity"
            onChange={handleChange}
            value={formData.quantity}/>
            <button>Add Item</button>
        </form>

    );
}