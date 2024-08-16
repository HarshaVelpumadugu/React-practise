import {useState} from "react";
export default function ScoreKeeper({numPlayers,target}){
    const[scores,setScores] = useState(new Array(numPlayers).fill(0));
    const incrementscore =(idx)=>{
        setScores((prevscores)=>{
            const copy=[...prevscores];
            copy[idx]+=1;
            return copy;
        });
    };
    const reset =()=>{
        setScores(new Array(numPlayers).fill(0));
    };
    return(
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score,idx)=>{
                    return(
                        <li key={idx}>Player{idx+1}:{score}
                        <button onClick={()=> incrementscore(idx)}>+1</button>
                        {score>=target && "WINNER"}
                        </li>
                    );
                })

                }
            </ul>
            <button onClick={reset}>reset</button>
        </div>
    );
};