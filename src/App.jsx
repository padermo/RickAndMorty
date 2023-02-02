import React from 'react';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import './utils/css/style.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
