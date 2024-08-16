import{useState,useEffect} from "react";
const RANDOM_QUOTE_URL="https://inspo-quotes-api.herokuapp.com/quotes/random";
export default function QuoteFetcher(){
   const[quote,setQuote]=useState({text:"",author:""});
   useEffect(()=>{
      async function getInitialQuote(){
        const response=await fetch(RANDOM_QUOTE_URL);
        const jsonResponse=await response.json();
        console.log(jsonResponse);
        const randomQuote=jsonResponse.quote;
        setQuote(randomQuote);
      }
      getInitialQuote();
   },[]);
   async function fetchQuote(){
     const response=await fetch(RANDOM_QUOTE_URL);
     const jsonResponse=await response.json();
     console.log(jsonResponse);
     const randomQuote=jsonResponse.quote;
     setQuote(randomQuote);
   }
   return(
    <div>
        <button onClick={fetchQuote}>Get Quote</button>
        <h1>{quote.text}</h1>
        <h2>{quote.author}</h2>
    </div>
   );
}