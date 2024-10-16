import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Shop, Contact } from './Pages'
import './App.css'





function App() {

  return (
    <>

      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </>
  )
}

export default App
