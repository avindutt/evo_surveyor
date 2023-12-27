import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
import SubmittedData from './Pages/SubmittedData';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<AdminLogin/>}></Route>
        <Route path='/view-data' element={<SubmittedData/>}></Route>
      </Routes>
    </div>
  )
}

export default App
