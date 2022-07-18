import { SelectedCoffee } from '../../components/SelectedCoffee'

import { Form } from '../../components/Form/Form'
import { Payment } from '../../components/Payment/Payment'

import {
  CheckoutContainer,
  PaymentContainer,
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
          <PaymentContainer>
            <Payment />
          </PaymentContainer>
        </AdressAndPaymentContainer>
        <SelectedCoffeeContainer>
          <SelectedCoffee />
        </SelectedCoffeeContainer>
      </Container>
    </>
  )
}
