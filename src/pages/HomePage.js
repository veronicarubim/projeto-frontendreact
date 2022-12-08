import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Produtos from '../components/Produtos/Produtos'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Produtos/>
        <Footer/>
    </div>
  )
}

export default HomePage