import React from 'react';
import {CardStyle} from "./styles"

const Produto = ({produto, noCarrinho}) => {
  
  return (
    <CardStyle>
    <section>
        {
          produto? 
          <div>
          <img src={produto.imagem}></img>
          <p key="{produto}">{produto.nome}</p>
          <p key="{preco}">{produto.preco}</p>
          <p key="{desc}">{produto.descricao}</p>
          <button onClick={() => noCarrinho(produto)} value={produto}>Add ao carrinho</button>
          </div> :null
        }
    </section>
    </CardStyle>

  )
};

export default Produto