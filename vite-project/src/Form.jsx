function handlesubmit(e){
    e.preventDefault();
}
export default function Form(){
    return (
        <form onSubmit={handlesubmit}>
            <button>Submit</button>
        </form>  
    );
}