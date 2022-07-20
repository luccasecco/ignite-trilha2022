import { SelectedCoffee } from '../../components/SelectedCoffee'

import { Form } from '../../components/Form/Form'

import {
  CheckoutContainer,
  TitleContainer,
  SelectedCoffeeContainer,
  Container,
  AdressAndPaymentContainer,
} from './styles'

export function Checkout() {
  return (
    <>
      <TitleContainer>
        <h2>Complete seu pedido</h2>
        <h2> Cafés Selecionados</h2>
      </TitleContainer>
      <Container>
        <AdressAndPaymentContainer>
          <CheckoutContainer>
            <Form />
          </CheckoutContainer>
        </AdressAndPaymentContainer>
        <SelectedCoffeeContainer>
          <SelectedCoffee />
        </SelectedCoffeeContainer>
      </Container>
    </>
  )
}
