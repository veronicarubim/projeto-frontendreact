import Produto from "./Produto/Produto";
import {MyContext} from "../../provider/provider"
import {useState, useContext} from "react";
import {HomeStyle} from "./styles"
import millenium from "../../assets/milleniumfalcon.jpg";
import deathstar from "../../assets/deathstar.jpeg"
import tiefighter from "../../assets/tiefighter.jpg"
import xwing from "../../assets/xwing.jpg"

const produtos = [
    {id: 1, nome: "Millenium Falcon", descricao: "Espaçonave", preco: 800, qtd: 1, imagem: millenium},
    {id: 2, nome: "Death Star", descricao: "Base Espacial", preco: 1500, qtd: 1, imagem: deathstar},
    {id: 3, nome: "Tie Fighter", descricao: "Nave de Combate", preco: 400, qtd: 1, imagem: tiefighter},
    {id: 4, nome: "X-Wing", descricao: "Nave de Combate", preco: 500, qtd: 1, imagem: xwing},
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
    <HomeStyle>
    <main>
        
        <section className="filtros">  
            
            <h2>Filtros e Ordenação</h2>
            <div>
            <p>Pesquisa</p>
            <input type="text" value={buscaNome} onChange={handleSearch} placeholder="Pesquisar por nome"></input>
            <input type="text" value={buscaTipo} onChange={handleType} placeholder="Pesquisar por tipo"></input>
            </div>

            <p>Ordem de preço</p>
            <select onChange={handleOrdem}>
            <option value="">Selecione...</option>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
            <option value="padrao">Padrão</option>
            </select>

            <p>Filtro de preço</p>
            <select onChange={handlePriceFilter}>
            <option value={''}>Selecione...</option>
            <option value={500}>Até 500 U$</option>
            <option value={1000}>Até 1000 U$</option>
            <option value={1500}>Até 1500 U$</option>
            </select>

        </section>

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

    </main>
    </HomeStyle>
)};


export default Produtos