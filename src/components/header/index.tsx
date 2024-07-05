import { HeaderContainer, HeaderItems, Links, Logo } from "./style"
import logo from '../../assets/logo.png'


export const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <HeaderItems>
        <Links href="">Home</Links>
        <Links href="">Contato</Links>
        <Links href="">About</Links>
      </HeaderItems>
    </HeaderContainer>
  )
}