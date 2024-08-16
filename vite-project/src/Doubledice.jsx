export default function DoubleDice() {
    const num1 = Math.floor(Math.random()*3)+1;
    const num2 = Math.floor(Math.random()*3)+1;
    const styles ={color: num1 === num2 ? "green" : "purple"};
    return (
      <div className="Doubledice" style={styles}>
        <h2>{num1 === num2 ? <h2>You Win!!</h2>:null}</h2>
        <p>Num1 : {num1}</p>
        <p>Num2 : {num2}</p>
      </div>
        
    );
}