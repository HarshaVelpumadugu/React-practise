import './index.css'
import Greeter from "./Greeter";
import Listpicker from './Listpicker.jsx';
import DoubleDice from './Doubledice.jsx';
import ColorList from './ColorList.jsx';
import ShoppingList from './ShoppingList.jsx';
import PropertyList from './PropertyList.jsx';
import Form from './Form.jsx';
import Clicker from "./Clicker.jsx";
import Counter from './Counter.jsx';
import Toggler from "./Toggler.jsx";
import ScoreKeeper from './ScoreKeeper.jsx';
import EmojiClicker from './EmojiClicker.jsx';
import Die from './Die.jsx';
import Dice from './Dice.jsx';
import LuckyN from './LuckyN.jsx';
import SignupForm from './SignupForm.jsx';
import './App.css';
import {sum} from './utils';
import BetterSignupForm from './BetterSignupForm.jsx';
import UsernameForm from './UsernameForm.jsx';
import ShoppingListForm from './ShoppingListForm.jsx';
import ShoppingListItem2 from './ShoppingListItem2.jsx';
import Counting from './Counting.jsx';
import QuoteFetcher from './QuoteFetcher.jsx';

const data=[
  {id: 1,item:"milk",quantity: 1, Completed:true},
  {id: 2,item:"Chicken",quantity: 4, Completed:false}
];
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
function lessThan4(dice){
  return sum(dice)<4;
}
function allSameValue(dice) {
  return dice.every((v)=> v===dice[0]);
}
export default function App(){
  return (
    <div>
      <QuoteFetcher/>
    </div>
  );
}