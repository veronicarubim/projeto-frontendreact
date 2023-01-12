import styled from "styled-components";

export const Imagem = styled.img`
height:100px;
border-radius: 10px;
`
export const Divisoria = styled.div`
    height: 40px;
    background-color: #010101;
    `
export const DivTitle = styled.div`
    background-color: #1d1e1f;
    height: 65px;
`
export const Total = styled.p`
color: #fcfcfc;
`
export const DivInfo = styled.div`
display: flex;
justify-content: flex-end;
margin-left: 40px;
width: 930px;
`

export const Title = styled.h1`
    color: #acadad;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-left: 40px;
`
export const Card = styled.div`
    height: 124px;
    width: 900px;
    background-color: #1d1e1f;
    color: #fcfcfc;
    display: flex;
    justify-content: stretch;
    border-radius: 10px;
    row-gap: 2vh;
    padding: 1.3vw;
    margin-left: 40px;
`
export const Button = styled.button`
    background-color: #FFBF00;
    width: 110px;
    height: 45px;
    color: #010101;
    border: none;
    border-radius: 10px;
    font-family: 'Trebuchet MS';
    cursor: pointer;
`
export const ButtonQt = styled.button`
    background-color: #FFBF00;
    width: 45px;
    height: 45px;
    color: #010101;
    border: none;
    border-radius: 10px;
    font-family: 'Trebuchet MS';
    font-size: 30px;
    text-align: center;
    cursor: pointer;
`

export const CartStyle = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    background-color: #010101;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    height: 900px;

div {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 3vw;
    row-gap: 2vh;
    
}

button:hover {

    transform: scale(1.1);
    transition-duration: 0.5s; 
    background-color: #FF9900;
  }

`