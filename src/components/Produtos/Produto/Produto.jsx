import React from 'react';
import {Card, CardStyle} from "./styles"

const Produto = ({produto, noCarrinho}) => {
  
  return (
    <CardStyle>
        {
          produto? 
          <Card>
          <img src={produto.imagem} width="230px" ></img>
          <p key="{produto}">{produto.nome}</p>
          <p key="{preco}">{produto.preco} Créditos</p>
          <p key="{desc}">{produto.descricao}</p>
          <button onClick={() => noCarrinho(produto)} value={produto}>Comprar</button>
          </Card> :null
        }
    </CardStyle>

  )
};

export default Produto