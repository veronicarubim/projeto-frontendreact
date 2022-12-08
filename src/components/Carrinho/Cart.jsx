import React, {useContext, useState} from 'react'
import { MyContext } from '../../provider/provider'
import Produtos from '../Produtos/Produtos'
import { CartStyle } from './styles'

const Carrinho = () => {

    const { globalState, setGlobalState } = useContext(MyContext)
    const [carrinho, setCarrinho] = useState(globalState) 
    const [itensNumero, setItensNumero] = useState(0)
   /*  console.log(globalState)
    console.log(carrinho) */

    const removerDoCarrinho = (itemId) => {
            const newCart = globalState.filter((item) => item.id !== itemId)
            setGlobalState(newCart)
          }

          const addUm = (produtoId) => {
            const precoInicial = carrinho.find((produto) => {
                return produto.id === produtoId 
            })
            const findItem = carrinho.find((produto) => {
                return produto.id === produtoId
            })
            findItem.qtd++ 
            findItem.preco += precoInicial.preco 
            setItensNumero(itensNumero + 1)
    
            setCarrinho([...carrinho])
        }
          
    /* const addUm = (produto) => {
        /* const qtd = produto.qtd;
        const newquantity = qtd + 1
        setCarrinho({...carrinho, qtd: + newquantity })
        console.log(setCarrinho) */
    
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
 {/*            <button onClick={() => }>-</button> */}</div>
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