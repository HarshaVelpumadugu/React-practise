function handleclick(){
    console.log("Button is clicked");
}
import "./Clicker.css";
export default function Clicker({message,buttonText}) {
    return(
        <div className="Clicker">
            <p>Click the Button</p>
            <button onClick={()=> alert(message)}>{buttonText}</button>
        </div>
    );
}