import React from 'react';
import './App.css';
import Title from './components/Header/Title';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './common/navLink';
import Routing from './Route/Routing';
import { Weatherprovider } from "./common/Weather_context";

function App() {
  return (
    <div className="container">
     <div className="main">
       <BrowserRouter>
       <Weatherprovider>
       <Title/>
       <Navbar/>
       <Routing/>
       </Weatherprovider>
       </BrowserRouter>
       
     </div>
    </div>
  );
}

export default App;
