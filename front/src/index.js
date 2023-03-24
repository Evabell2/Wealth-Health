import React from 'react'
import { createRoot }  from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style/style.css'
import './style/datePicker.css'
import CreateEmployee from './pages/CreateEmployee'
import CurrentEmployee from './pages/CurrentEmployee'
import Header from './Components/Header'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>

    <Header />
      
    <Routes>
      <Route path='/' element={<CreateEmployee />} />
      <Route path='/current-employee' element={<CurrentEmployee />} />
    </Routes>

  </BrowserRouter>,
)
