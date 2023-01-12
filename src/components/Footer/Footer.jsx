import React from 'react'
import {FooterStyle} from "./styles"
import babyyoda from "../../assets/babyyoda.png"

const Footer = () => {
  return (
    <FooterStyle>
    <div>
      <hr></hr>
      <p> Página Criada por Veronica Rubim </p>
      <img src={babyyoda} alt="yoda"/>
    </div>
    </FooterStyle>
  )
}

export default Footer