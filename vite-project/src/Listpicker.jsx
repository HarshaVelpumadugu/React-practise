export default function Listpicker({values}){
    const randidx=Math.floor(Math.random()*values.length);
    const randele=values[randidx];
    return(
        <div>
            <p>The list of values : {values} </p>
            <p>Random Element is : {randele} </p>
        </div>
    );
}