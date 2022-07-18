import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import {
  HeaderContainer,
  ButtonContainer,
  ButtonCredit,
  ButtonDebit,
  ButtonMoney,
} from './styles'

export function Payment() {
  return (
    <>
      <HeaderContainer>
        <CurrencyDollar size={24} />
        <p>
          Pagamento <br />
          <b>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
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
    </>
  )
}
