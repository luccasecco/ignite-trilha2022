import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CheckoutContainer,
  FormContainer,
  InputCep,
  InputCity,
  InputComplement,
  InputDistrict,
  InputFederativeUnit,
  InputNumberOfHouse,
  InputStreet,
  PaymentContainer,
  HeaderContainer,
  TitleContainer,
  SelectedCoffeeContainer,
  Container,
  AdressAndPaymentContainer,
  ButtonCredit,
  ButtonDebit,
  ButtonMoney,
  ButtonContainer,
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
            <FormContainer>
              <HeaderContainer>
                <MapPinLine size={24} />

                <p>
                  Endereço de Entrega <br />
                  <b>Informe o endereço onde deseja receber seu pedido</b>
                </p>
              </HeaderContainer>
              <form action="">
                <InputCep type="text" placeholder="CEP" />
                <br />
                <InputStreet type="text" placeholder="Rua" />
                <br />
                <InputNumberOfHouse type="text" placeholder="Número" />
                <InputComplement type="text" placeholder="Complemento" />
                <br />
                <InputDistrict type="text" placeholder="Bairro" />
                <InputCity type="text" placeholder="Cidade" />
                <InputFederativeUnit type="text" placeholder="UF" />
              </form>
            </FormContainer>
          </CheckoutContainer>
          <PaymentContainer>
            <HeaderContainer>
              <CurrencyDollar size={24} />
              <p>
                Pagamento <br />
                <b>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </b>
              </p>
            </HeaderContainer>
            <ButtonContainer>
              <ButtonCredit>
                <CreditCard size={16} />
                Cartão de crédito
              </ButtonCredit>
              <ButtonDebit>
                <Bank size={16} />
                Cartão de débito
              </ButtonDebit>
              <ButtonMoney>
                <Money size={16} />
                Dinheiro
              </ButtonMoney>
            </ButtonContainer>
          </PaymentContainer>
        </AdressAndPaymentContainer>
        <SelectedCoffeeContainer>
          <p>Café selecionado 1 </p>
          <p>Café selecionado 2 </p>
        </SelectedCoffeeContainer>
      </Container>
    </>
  )
}
