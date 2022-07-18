import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>
      <nav>
        <button type="button">
          {' '}
          <MapPin size={22} /> Porto Alegre, RS
        </button>
        <NavLink to="/checkout" title="Checkout">
          {' '}
          <ShoppingCart size={22} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
