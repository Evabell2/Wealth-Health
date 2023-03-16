import React from 'react'
import { createRoot }  from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './style/style.css'
import CreateEmployee from './pages/CreateEmployee'
import Header from './Components/Header'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>

    <Header />
      
    <Routes>
      <Route path='/' element={<CreateEmployee />} />
    </Routes>

  </BrowserRouter>,
)
