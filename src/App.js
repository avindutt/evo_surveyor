import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AdminLogin from './Pages/AdminLogin';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<AdminLogin/>}></Route>
      </Routes>
    </div>
  )
}

export default App
