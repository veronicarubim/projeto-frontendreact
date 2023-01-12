import React, {useContext, useState} from 'react'
import { MyContext } from '../../provider/provider'
import { Button, ButtonQt, Card, CartStyle, DivInfo, Divisoria, DivTitle, Imagem, Title, Total } from './styles'

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

    let total = 0
    globalState.forEach(item => {
        total = total + item.preco * item.qtd
    }) 
        
  return (
    <CartStyle>

      <DivTitle>
      <Title>Seu carrinho</Title>
      </DivTitle>
      <Divisoria></Divisoria>
        {
        globalState? globalState.map((produto) => (
          <Card key={produto.index}> 
              <div>
                <Imagem src={produto.imagem}/>
                <p>{produto.nome}</p> 
                <p>{produto.preco} U$</p>
                <p>{produto.descricao}</p>
                <p>{produto.qtd}</p>
              </div>
              <div>
                <Button onClick={() => removerDoCarrinho(produto.id)}>Excluir</Button>
                <ButtonQt onClick={() => addUm(produto.id)}>+</ButtonQt>
                <ButtonQt onClick={() => menosUm(produto.id)}>-</ButtonQt>
              </div>
           </Card>
        )) 
        :null
        }
        {
        total > 0 ? (<DivInfo>
        <Total>Total: {total} C$</Total>
        <Button>Finalizar compra</Button>
        </DivInfo>) : null}
        
    </CartStyle>
    
    
  )
}

export default Carrinho