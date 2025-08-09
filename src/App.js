import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';


/* admin route */

import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Useradd from './Admin/Useradd';

function App() {
  return (

  <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>


      <Route path="/Admin/Dashboard" element={<Dashboard/>}/>
      <Route path="/Admin/Useradd" element={<Useradd/>}/>
      <Route path="/Admin/Users" element={<Users/>}/>

      
  </Routes>

  );
}

export default App;
