import styled from "styled-components";

export const CartStyle = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;

section {
    display: flex;
    flex-direction: column;
    row-gap: 2vh;
}

div {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 3vw;
    row-gap: 2vh;
    background-color: #efc3f8;
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    
}

button {
    
    margin-top: 5px;
    background-color: #874694;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: 'Trebuchet MS'}

button:hover {
    transform: scale(1.1);
    transition-duration: 0.5s; 
    background-color: #4f2957;
  }

`