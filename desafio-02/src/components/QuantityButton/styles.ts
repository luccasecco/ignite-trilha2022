import styled from 'styled-components'

export const QuantityButton = styled.button`
  p {
    max-width: 5rem;
    height: 1.8rem;
    margin-top: 1rem;

    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-900']};
    border-radius: 6px;
    font-size: 1rem;
    font-family: 'Roboto';
    padding: 0.2rem;
    line-height: 0;
  }
`

const BaseButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  color: ${(props) => props.theme['purple-900']};
  font-size: 1rem;
`

export const MinusButton = styled(BaseButton)`
  width: 1.8rem;
  height: 1.8rem;
`

export const PlusButton = styled(BaseButton)`
  width: 1.8rem;
  height: 1.8rem;
`
