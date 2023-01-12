import {Button, Logo, NavbarStyle} from "./style"
import icone from "../../assets/navesespaciais.png"
import carrinho from "../../assets/icons8-adicionar-o-carrinho-de-compras-48.png"
import home from "../../assets/home.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToCarrinho } from "../../routes/coordinator";


const Navbar = () => {
    
  const navigate = useNavigate()

  return (
    
    <NavbarStyle>
      
        <div>
          <a href="https://www.instagram.com/veronicarubim/"><img src={instagram} alt="imagem"/></a>
          <a href="https://www.linkedin.com/in/veronica-rubim-0b0b87169/"><img src={linkedin} alt="imagem"/></a>
          <a href="https://github.com/veronicarubim"><img src={github} alt="imagem"/></a>
        </div>

        <div>
          <Logo src={icone} alt="logo"/>
        </div>

        <div>
          <Button onClick={() => {goToHomePage(navigate)}}>HOME</Button>
          <Button onClick={() => {goToCarrinho(navigate)}}>CARRINHO</Button>
        </div>
      
    </NavbarStyle>
  )
};

export default Navbar