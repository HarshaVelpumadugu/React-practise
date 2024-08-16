export default function ShoppingListItem({item,quantity,Completed}){
    const styles = {color: Completed ? "red" : "green",textDecoration: Completed ? "line-through" : "none"}
    return <li style={styles} >{item} - {quantity}</li>
}