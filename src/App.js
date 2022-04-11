import logo from './logo.svg';
import './App.css';
import { ClienteContext, ClienteProvider } from './context/Cliente';
import { useContext, useEffect } from 'react';
import Table from './components/Table';
import Login from './page/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {





  return (
 

  
      <div className="App">
      <ClienteProvider>


       <Login></Login>


     </ClienteProvider>  
      </div>
    
     
  );
}

export default App;
