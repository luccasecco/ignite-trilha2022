import styled from 'styled-components'

export const QuantityButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 1.8rem;
  max-width: 6rem;

  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-300']};
  color: ${(props) => props.theme['gray-900']};
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Roboto';

  span {
    font-family: 'Roboto', sans-serif;
    background-color: transparent;
    color: ${(props) => props.theme['gray-900']};
    font-size: 1rem;
    font-weight: normal;
  }

  svg {
    background-color: ${(props) => props.theme['gray-300']};

    color: ${(props) => props.theme['purple-900']};
    padding: 0.3rem;

    border-radius: 6px;
    line-height: 0;
  }
`

const BaseButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  color: ${(props) => props.theme['purple-900']};
  font-size: 1rem;
  line-height: 0;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-900']};
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
