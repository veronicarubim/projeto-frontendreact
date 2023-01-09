import styled from "styled-components";

export const CartStyle = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

section {

    display: flex;
    flex-direction: column;
    row-gap: 2vh;
    margin: 3.5%;
    border-radius: 10px;
    background-color: #F7E6F3; 
    padding: 1.5vw;

}

div {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 3vw;
    row-gap: 2vh;
    
}

#cart {

    background-color: #efc3f8;
    width: 60vw;
    height: 15vh;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    padding: 1.2vw;
}

#cart:hover {

    transform: scale(1.03);
    transition-duration: 0.5s; 
  }

button {
    
    background-color: #874694;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: 'Trebuchet MS';
    width: fit-content;
    height: 4vh;
}

button:hover {

    transform: scale(1.1);
    transition-duration: 0.5s; 
    background-color: #4f2957;
  }

`