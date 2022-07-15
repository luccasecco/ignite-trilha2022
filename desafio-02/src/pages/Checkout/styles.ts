import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 74rem;
  margin: 1rem auto;
`

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 2rem auto;

  max-width: 74rem;
`

export const AdressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  max-width: 74rem;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto;
  border-radius: 4px;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-600']};

    b {
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`

const BaseConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-100']};
`

export const FormContainer = styled(BaseConatiner)`
  border-radius: 8px;

  svg {
    color: ${(props) => props.theme['yellow-900']};
  }
`

export const SelectedCoffeeContainer = styled(BaseConatiner)`
  min-width: 28rem;
  min-height: 31.125rem;

  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const PaymentContainer = styled(BaseConatiner)`
  max-width: 40rem;
  margin-top: 0.75rem;
  border-radius: 8px;

  svg {
    color: ${(props) => props.theme['purple-900']};
  }
`

const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-200']};
  color: ${(props) => props.theme['gray-500']};
  border-radius: 4px;
  padding: 12px;
  height: 2.625rem;
  border: 0;
  margin: 1rem 0;
`

export const InputCep = styled(BaseInput)`
  width: 12.5rem;
`

export const InputStreet = styled(BaseInput)`
  width: 35rem;
`

export const InputNumberOfHouse = styled(BaseInput)`
  width: 12.5rem;
  margin-right: 0.5rem;
`

export const InputComplement = styled(BaseInput)`
  width: 21.75rem;
`

export const InputDistrict = styled(BaseInput)`
  width: 12.5rem;
  margin-right: 0.5rem;
`
export const InputCity = styled(BaseInput)`
  width: 17.25rem;
  margin-right: 0.5rem;
`

export const InputFederativeUnit = styled(BaseInput)`
  width: 3.75rem;
`

const BaseButton = styled.button`
  width: 11.16rem;
  height: 3.18rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  border: 0;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;

  font-size: 0.875rem;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.33rem;
  margin-top: 2rem;
  align-items: center;
`

export const ButtonCredit = styled(BaseButton)``
export const ButtonDebit = styled(BaseButton)``
export const ButtonMoney = styled(BaseButton)``
