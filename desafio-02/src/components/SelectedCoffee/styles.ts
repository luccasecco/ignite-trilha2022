import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
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
  gap: 0.5rem;

  p {
    background-color: ${(props) => props.theme['gray-300']};
  }
`

const BaseButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  color: ${(props) => props.theme['purple-500']};
  font-size: 1rem;

  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const MinusButton = styled(BaseButton)`
  width: 1.8rem;
  height: 1.8rem;
`

export const PlusButton = styled(BaseButton)`
  width: 1.8rem;
  height: 1.8rem;
`

export const ButtonRemove = styled(BaseButton)`
  width: 5rem;
  height: 2rem;
  font-size: 0.7rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;

  border-radius: 8px;
`
