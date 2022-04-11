import logo from './logo.svg';
import './App.css';
import { ClienteContext, ClienteProvider } from './context/Cliente';
import { useContext, useEffect } from 'react';
import Table from './components/Table';
import Login from './page/Login';
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';


const App = () => {





  return (
 

   <ClienteProvider>
      <div className="App">
     

    <Router>
      <Header/>
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/login"   element={ <Login/> } />

        </Routes>
    </Router>

    
      </div>
     </ClienteProvider>  
     
  );
}

export default App;
