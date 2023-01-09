import styled from "styled-components"

export const NavbarStyle = styled.div `
background-color: #874694;
color: white;
text-shadow: 2px 2px 4px black;
text-align: center;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

img:hover {
    transform: scale(1.1);
    transition-duration: 0.7s; 
  }

div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 2vw;
}

section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

button {
    width: 150px;
    height: 50px;
    margin-top: 5px;
    background-color: #C17FE0;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: 'Trebuchet MS';
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 3px;
  }

  button:hover {
    transform: scale(1.1);
    transition-duration: 0.5s; 
    background-color: #4f2957;
  }
`