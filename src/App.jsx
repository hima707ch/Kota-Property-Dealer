import React from 'react';
import {Route, Routes} from "react-router-dom";

import Block from './Block';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';

import Body from './Body'
import Header from './Header';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
      <Route exact path = "" element = {<Body/>} />
      <Route path = "aboutus" element={<AboutUs/>}/>
      </Routes>      

      <footer>
        <a href = "/">Home</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href = "/aboutUs" >About Us</a>
        <p > Thank You</p>
      
       
        

      </footer>
    </div>
  );
}

export default App;
