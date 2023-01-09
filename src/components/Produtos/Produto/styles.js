import styled from "styled-components"

export const CardStyle = styled.div `

div {
    
    background-color: #efc3f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

section {
    margin: 0;
    padding: 0;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  div:hover {
    transform: scale(1.1);
    transition-duration: 0.7s; 
    background-color: #e89ff7;
  }

  img {
    width: 230px;
    border-radius: 12px;
  }

  img:hover {
    transform: scale(1.1);
    transition-duration: 0.7s; 
  }

  p {
    color: #ffffff ;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-shadow: 2px 2px 4px black;
    text-align: center;
  }

  button {
    width: 150px;
    height: 50px;
    margin-top: 5px;
    background-color: #874694;
    color: white;
    border: none;
    border-radius: 10px;
    font-family: 'Trebuchet MS'
  }

  button:hover {
    transform: scale(1.1);
    transition-duration: 0.5s; 
    background-color: #4f2957;
  }
`;
