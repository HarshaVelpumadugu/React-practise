import {getRolls} from "./utils";
import {useState} from "react";
import Dice from "./Dice.jsx";
export default function LuckyN({numDice=2,winCheck = () => false}){
    const[dice,setDice]=useState(getRolls(numDice));
    const iswinner = winCheck(dice);
    const roll=()=> setDice(getRolls(numDice));
    return(
        <main className="LuckyN">
            <h1>Lucky {iswinner && "You Win!"}</h1>
            <Dice dice={dice}/>
            <button onClick={roll}>Re-roll</button>
        </main>
    );
}