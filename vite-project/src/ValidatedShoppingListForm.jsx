import {useState} from "react";
export default function ValidatedShoppingListForm({addItem}){
    const[formData,setFormData]=useState({product:"",quantity:0});
    const[productIsValid,setProductIsValid]=useState(false);
    const validate=(product)=>{
        if(product.length===0){
            setProductIsValid(false);
        }
        else{
            setProductIsValid(true);
        }
    };
    const handleChange=(evt)=>{
        if(evt.target.name==="product"){
            validate(evt.target.value);
        }
        const changeField=evt.target.name;
        const newValue=evt.target.value;
        setFormData((currData)=>{
            return {...currData,[changeField]: newValue};
        });
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(productIsValid){
        console.log("Submitted!!");
        addItem(formData);
        setFormData({product:"",quantity:0});
        }
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
            {!productIsValid && <p style={{color:"red"}}>Product name can't be Empty</p>}
            <label htmlFor="quantity">Quantity</label>
            <input
            type="number" placeholder="1"
            name="quantity" id="quantity"
            onChange={handleChange}
            value={formData.quantity}/>
            <button disable={!productIsValid}>Add Item</button>
        </form>

    );
}