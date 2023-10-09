import React from 'react';
import {BrowserRouter as Router} from "react-router-dom"
import {Route,Routes} from 'react-router-dom';
import Listado from "./pages/Listado";
import Que from "./pages/que";
import AAA from "./pages/como";
import './App.css';




function App() {
  return (
    <Router>
       <div>
        <Routes>
          <Route path='/' element={<Listado />}/>
          <Route path='/que/' element={<Que />}/>
          <Route path='como' element={<AAA />}/>

        </Routes>        
        </div> 
    </Router>
  );
}

export default App;
