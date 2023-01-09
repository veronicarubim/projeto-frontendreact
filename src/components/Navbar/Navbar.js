import {NavbarStyle} from "./style"
import icone from "../../assets/icone.png"
import carrinho from "../../assets/icons8-adicionar-o-carrinho-de-compras-48.png"
import home from "../../assets/home.png"
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToCarrinho } from "../../routes/coordinator";


const Navbar = () => {
    
  const navigate = useNavigate()

  return (
    
    <NavbarStyle>
      <section>
        <div>
          <img src={icone} alt="logo"/>
          <h1>Loja de Naves Espaciais</h1>
        </div>

        <div>
          <button onClick={() => {goToHomePage(navigate)}}>Home <img src={home} width="15px"></img></button>
          <button onClick={() => {goToCarrinho(navigate)}}>Ir para carrinho <img src={carrinho} width="15px"></img></button>
        </div>
      </section>
    </NavbarStyle>
  )
};

export default Navbar