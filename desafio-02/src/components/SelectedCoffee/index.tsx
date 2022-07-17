import { Trash } from 'phosphor-react'
import {
  QuantityContainer,
  SelectedCoffeeContainer,
  ButtonRemove,
  ButtonContainer,
  MinusButton,
  PlusButton,
} from './styles'
import coffeImg from '../../assets/expresso.svg'

export function SelectedCoffee() {
  return (
    <>
      <SelectedCoffeeContainer>
        <img src={coffeImg} alt="" />
        <QuantityContainer>
          <h1>Expresso Tradicional</h1>
          <ButtonContainer>
            <p>
              <MinusButton>-</MinusButton>1<PlusButton>+</PlusButton>
            </p>

            <ButtonRemove>
              <Trash size={20} />
              Remover
            </ButtonRemove>
          </ButtonContainer>
        </QuantityContainer>
        <span>R$ 9,90</span>
      </SelectedCoffeeContainer>
    </>
  )
}
