import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 75rem;
  margin: 2rem auto;

  font-size: 0.875rem;
  font-family: 'Baloo 2', sans-serif;
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
  max-width: 75rem;
  align-items: flex-start;
  justify-content: space-around;
  margin: 0 auto;
  border-radius: 4px;
`

const BaseConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-100']};
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
