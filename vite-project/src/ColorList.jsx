export default function ColorList({colors}){
    return(
        <div>
            <p>ColorList</p>
            <ul>
                {colors.map((c)=>(
                    <li style={{color:c}}>{c}</li>
                ))}
            </ul>
        </div>
    );
}