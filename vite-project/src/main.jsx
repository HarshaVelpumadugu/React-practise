import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greeter from "./Greeter";
import Listpicker from './Listpicker.jsx';
import DoubleDice from './Doubledice.jsx';
import ColorList from './ColorList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
)
