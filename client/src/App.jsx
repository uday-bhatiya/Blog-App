import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Home, About ,Signin, Signup, Dashboard, Project} from "./pages"
const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Signup/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/project' element={<Project/>} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
