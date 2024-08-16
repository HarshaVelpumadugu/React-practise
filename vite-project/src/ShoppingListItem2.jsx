import {useState} from "react";
import ShoppingListForm from "./ShoppingListForm";
import {v4 as uuid} from "uuid";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
export default function ShoppingListItem2(){
    const[items,setItems]=useState([{id:uuid(),product:"Eggs",quantity:2},
        {id:uuid(),product:"Apples",quantity:3},
    ]);
    const addItem =(item)=>{
        setItems((currItems)=>{
            return[...currItems,{...item,id:uuid()}];
        });
    };
    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i)=>(
                    <li key={i.id}>{i.product}-{i.quantity}</li>
                ))}
            </ul>
            <ValidatedShoppingListForm addItem={addItem}/>
        </div>
    );
};