import React from 'react';
import "../src/css/style.css"
import "../src/dist/output.css"

import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signUp' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
