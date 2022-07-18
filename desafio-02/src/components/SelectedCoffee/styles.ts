import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div``

export const CoffeeCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  gap: 1rem;

  border-bottom: 1px solid ${(props) => props.theme['gray-300']};
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 10rem;

  h1 {
    font-size: 1rem;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  input {
    border: 0;
    width: 1.5rem;
    text-align: center;
    background-color: ${(props) => props.theme['gray-300']};
  }
`

const BaseButton = styled.button`
  border: 0;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  color: ${(props) => props.theme['purple-500']};
  font-size: 1rem;

  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0 transparent;
  }
`

export const MinusButton = styled(BaseButton)``

export const PlusButton = styled(BaseButton)``

export const ButtonRemove = styled(BaseButton)`
  width: 5rem;
  height: 2rem;
  font-size: 0.7rem;
  padding: 0.5rem;
  margin-left: 0.5rem;

  display: flex;
  align-items: center;

  border-radius: 8px;
`
export const TotalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 23rem;

  p {
    margin-top: 1rem;
  }

  p:nth-child(3) {
    font-weight: bold;
    font-size: 1.25rem;
  }

  h1 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
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
