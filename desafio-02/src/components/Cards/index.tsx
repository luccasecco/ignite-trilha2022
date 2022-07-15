import { ShoppingCartSimple } from 'phosphor-react'
import { CardContainer, CartButton, MinusButton, PlusButton } from './styles'
import coffeeImg from '../../assets/expresso.svg'

export function Cards() {
  return (
    <CardContainer>
      <img src={coffeeImg} alt="" />
      <span>Tradicional</span>
      <h1>Expresso tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div>
        <p>9,90</p>

        <p>
          <MinusButton>-</MinusButton>1<PlusButton>+</PlusButton>
        </p>

        <CartButton>
          <ShoppingCartSimple size={28} />
        </CartButton>
      </div>
    </CardContainer>
  )
}
