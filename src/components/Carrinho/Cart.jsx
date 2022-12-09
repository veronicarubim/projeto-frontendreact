import React, {useContext, useState} from 'react'
import { MyContext } from '../../provider/provider'
import { CartStyle } from './styles'

const Carrinho = () => {

    const { globalState, setGlobalState } = useContext(MyContext)
    const [carrinho, setCarrinho] = useState(globalState) 
    const [itensNumero, setItensNumero] = useState(0)

    const removerDoCarrinho = (itemId) => {
      const newCart = globalState.filter((item) => item.id !== itemId)
      setGlobalState(newCart)
    }

    const addUm = (produtoId) => {
      const findItem = carrinho.find((produto) => {
      return produto.id === produtoId
      })
      findItem.qtd++ 
      setItensNumero(itensNumero + 1)
      setCarrinho([...carrinho])
    }

    const menosUm = (produtoId) => {
      const findItem = carrinho.find((produto) => {
      return produto.id === produtoId
      })
      if (findItem.qtd > 1) {
      findItem.qtd--
      setCarrinho([...carrinho])}
    }
        
  return (
    <CartStyle>
    <section>
        <h1>Carrinho de Compras</h1>
        {
        globalState? globalState.map((produto) => (
          <div key={produto.index}> 
              <p>{produto.nome}</p> 
              <p>{produto.preco}</p>
              <p>{produto.descricao}</p>
              <p>{produto.qtd}</p>
              <div>
              <button onClick={() => removerDoCarrinho(produto.id)}>Excluir</button>
              <button onClick={() => addUm(produto.id)}>+</button>
              <button onClick={() => menosUm(produto.id)}>-</button>
              </div>
           </div>
        )) 
        :null
        }
        <p>Total: {}</p>
    </section>
    </CartStyle>
  )
}

export default Carrinho