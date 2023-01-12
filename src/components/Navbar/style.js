import styled from "styled-components"

export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 5px;
  background-color: #ffffff;
  color: #010101;
  border: none;
  border-radius: 10px;
  font-family: 'Trebuchet MS';
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  column-gap: 3px;
  
`
export const Logo = styled.img`
  height: 200px;
`
export const Links = styled.img`
  height: 16px;
  `

export const NavbarStyle = styled.div `
  background-color: #010101;
  color: white;
  text-shadow: 2px 2px 4px black;
  display: flex;
  justify-content: space-around;
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 2vw;
}

  button:hover {
    transform: scale(1.1);
    transition-duration: 0.5s; 
    background-color: #424242;
    color: #FFFFFF;
  }
`