import styled from 'styled-components'

export const ButtonContainer = styled.div`
  button {
    background-color: ${(props) => props.theme['purple-900']};
    color: ${(props) => props.theme.white};

    padding: 0.4rem;

    border: 0;
    border-radius: 4px;
    line-height: 0;

    cursor: pointer;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: ${(props) => props.theme['purple-500']};
    }
  }
`
