import styled from "styled-components"

export const Card = styled.div`
  width: 244px;
  height: 360px;
  background-color: #1d1e1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const CardStyle = styled.div `

padding: 2%;

  div:hover {
    transform: scale(1.1);
    transition-duration: 0.7s; 
    background-color: #4b4b4c;
  }

  p {
    color: #ffffff ;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-shadow: 2px 2px 4px black;
    text-align: center;
  }

  button {
    margin-bottom: 16px;
    width: 150px;
    height: 50px;
    background-color: #FFBF00;
    color: #010101;
    border: none;
    border-radius: 10px;
    font-family: 'Trebuchet MS';
    cursor: pointer;
  }

  button:hover {
    background-color: #FF9900;
  }
`;
