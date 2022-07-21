import logoImg from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

import { HeaderContainer } from './styles'
import { ButtonCart } from '../ButtonCart/ButtonCart'

export function Header() {
  const { cart } = useCart()
  const cartSize = cart.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>
      <nav>
        <p>
          <MapPin size={22} /> Florianópolis, SC
        </p>
        <NavLink to="/checkout" title="Checkout">
          <ButtonCart />
        </NavLink>
        {cartSize ? <span>{cartSize}</span> : ''}
      </nav>
    </HeaderContainer>
  )
}
