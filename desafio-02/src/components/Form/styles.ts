import styled from 'styled-components'

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
  max-width: 40rem;

  svg {
    color: ${(props) => props.theme['yellow-900']};
  }
`

export const InputContainer = styled.div`
  border-bottom: 2px solid ${(props) => props.theme['gray-300']};
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
  margin-top: 2rem;
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
  margin-bottom: 2rem;
`
export const CheckButton = styled.button`
  width: 23rem;
  height: 2.875rem;
  margin: 1.5rem 1rem;

  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['white-100']};

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;

  border: 0;
  border-radius: 8px;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-900']};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-500']};
  }
`

export const PaymentContainer = styled(BaseConatiner)`
  width: 35rem;
  margin-top: 1rem;
  border-radius: 8px;
  text-align: left;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme['purple-900']};
  }

  button {
    margin: 1rem auto;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 35rem;
  gap: 1.33rem;
  margin: 2rem 0 0;
  align-items: center;
`

const BaseInputPayment = styled.div`
  width: 11.16rem;
  height: 3.18rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  /* justify-content: center; */
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

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-900']};
  }

  input {
    border: 0;
    background-color: transparent;
    cursor: pointer;

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0 transparent;
    }
  }
`

export const InputCredit = styled(BaseInputPayment)``
export const InputDebit = styled(BaseInputPayment)``
export const InputMoney = styled(BaseInputPayment)``
