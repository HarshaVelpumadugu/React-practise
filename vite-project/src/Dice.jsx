import Die from "./Die";
import "./Dice.css";
export default function Dice({dice,color="slateblue"}){
    return(
        <section className="Dice">
            {dice.map((v,i)=>(
                <Die key={i} val={v} color={color}/>
            ))};
        </section>  
    );
}