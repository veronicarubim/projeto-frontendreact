import Produto from "./Produto/Produto";
import {MyContext} from "../../provider/provider"
import {useState, useContext} from "react";
import {HomeStyle, Filtro, DivInput, Input, ContainerCard, Select} from "./styles"
import millenium from "../../assets/milleniumfalcon.jpg";
import deathstar from "../../assets/deathstar.jpeg"
import tiefighter from "../../assets/tiefighter.jpg"
import xwing from "../../assets/xwing.jpg"
import atact from "../../assets/atactwalker.png"
import atat from "../../assets/atatwalker.png"
import endurance from "../../assets/endurance.jpeg"
import uwing from "../../assets/uwing.png"

const produtos = [
    {id: 1, nome: "Millenium Falcon", descricao: "Espaçonave", preco: 800, qtd: 1, imagem: millenium},
    {id: 2, nome: "Death Star", descricao: "Base Espacial", preco: 1500, qtd: 1, imagem: deathstar},
    {id: 3, nome: "Tie Fighter", descricao: "Nave de Combate", preco: 400, qtd: 1, imagem: tiefighter},
    {id: 4, nome: "X-Wing", descricao: "Nave de Combate", preco: 500, qtd: 1, imagem: xwing},
    {id: 5, nome: "AT-ACT Walker", descricao: "Veículo de Transporte Terrestre", preco: 1100, qtd: 1, imagem: atact},
    {id: 6, nome: "AT-AT Walker", descricao: "Veículo de Transporte Terrestre", preco: 1100, qtd: 1, imagem: atat},
    {id: 7, nome: "Endurance", descricao: "Destroyer", preco: 1400, qtd: 1, imagem: endurance},
    {id: 8, nome: "U-Wing", descricao: "Nave de Transporte de Tropas", preco: 500 , qtd: 1, imagem: uwing}

];

const Produtos = () => {

    const [carrinho, setCarrinho] = useState([])
    const {setGlobalState} = useContext(MyContext)
    const [buscaNome, setBuscaNome] = useState("")
    const [ordem, setOrdem] = useState("")
    const [preco, setPreco] = useState("")
    const [buscaTipo, setBuscaTipo] = useState("")
    
    const handleOrdem = (e) => {
    setOrdem(e.target.value)
    };

    const handlePriceFilter = (e) => {
        setPreco(e.target.value)
    };

    const handleSearch = (e) => {
        setBuscaNome(e.target.value)
    }

    const handleType = (e) => {
        setBuscaTipo(e.target.value)
    }

    function addAoCarrinho (produto) {
        let copiaCarrinho = [...carrinho]
        let findItemProdutos = produtos.find((item) => {
        return item.id === produto.id
    })  
        let findItemCarrinho = carrinho.find((itemDoCarrinho) => {
            return itemDoCarrinho.id === findItemProdutos.id
        })
        if (findItemCarrinho) { 
                findItemCarrinho.qtd++ 
            } else {
                findItemProdutos.qtd = 1
                copiaCarrinho.push(findItemProdutos)
                setCarrinho(copiaCarrinho)
                setGlobalState(copiaCarrinho)
        }
    }

    return (
        <>
    <HomeStyle>
    
            <DivInput>
            <Input type="text" value={buscaNome} onChange={handleSearch} placeholder="Pesquisar por nome"></Input>
            <Input type="text" value={buscaTipo} onChange={handleType} placeholder="Pesquisar por tipo"></Input>
            </DivInput>
            
            <Filtro>  
            <p>Créditos:</p>
            <Select onChange={handleOrdem}>
            <option value="">Selecione...</option>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
            <option value="padrao">Padrão</option>
            </Select>

            {/* <p>Filtro de preço</p> */}
            <Select onChange={handlePriceFilter}>
            <option value={''}>Selecione...</option>
            <option value={500}>Até 500 C$</option>
            <option value={1000}>Até 1000 C$</option>
            <option value={1500}>Até 1500 C$</option>
            </Select>
            </Filtro>
        </HomeStyle>
        <ContainerCard>
            { 
            produtos.filter((produto) => {
                return produto.nome.toLowerCase().includes(buscaNome.toLowerCase())
            })
            .filter((produto) => {
                return produto.descricao.toLowerCase().includes(buscaTipo.toLowerCase())
            })
            .filter((produto) => {
                if (preco === 1500) {
                    return produto.preco
                } else if (preco >= produto.preco) {
                    return produto.preco
                } else if (preco === ""){
                    return produto
                }
            })
            .sort((produtoa,produtob) => {
            if
            (ordem === "crescente") {
            if(produtoa.preco > produtob.preco) return 1;
            if(produtoa.preco < produtob.preco) return -1;
            } else if 
            (ordem === "decrescente") {
            if(produtoa.preco < produtob.preco) return 1;
            if(produtoa.preco > produtob.preco) return -1;
            } else if (ordem === "padrao") {
            if(produtoa.id > produtob.id) return 1;
            if(produtoa.id < produtob.id) return -1 
            }
            })
            .map((produto) => (
                <Produto produto={produto} key={produto.index} noCarrinho={addAoCarrinho}/>
            ))}
            </ContainerCard>
   
    
    </>
)};


export default Produtos