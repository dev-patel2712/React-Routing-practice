import React from 'react'



import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";

import Navigationbar from "./Components/Navigationbar";
import Mounting from "./Components/Mounting";
import Updating from "./Components/Updating";
import Unmounting from "./Components/Unmounting";
import Create from "./Components/Create";


function App() {
  return (<BrowserRouter>
   <Navigationbar/>
   <Routes> 
     
     <Route path="/" element={<Create/>} />
     <Route path="/updating" element={<Updating/>} />
     <Route path="/unmounting" element={<Unmounting/>} />
     <Route path="/mounting" element={< Mounting/>} />
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
