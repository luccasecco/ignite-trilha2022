import logoImg from '../../assets/logo.svg'
import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'
import { ButtonCart } from '../ButtonCart/ButtonCart'
import { useCart } from '../../hooks/useCart'

interface CartItemsAmount {
  [key: number]: number
}

export function Header() {
  const { cart } = useCart()

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[product.id] = product.amount

    return newSumAmount
  }, {} as CartItemsAmount)

  console.log(cartItemsAmount)

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
          <ButtonCart />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
