import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Carrinho from '../pages/Carrinho'
import HomePage from '../pages/HomePage'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <HomePage/>} />
            <Route path="/carrinho" element={ <Carrinho/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
