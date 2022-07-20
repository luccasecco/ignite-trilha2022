import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 74rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2rem;
  margin: auto;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 15rem;

    button {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      padding: 0.5rem;
      border-radius: 8px;
      border: 0;
      cursor: pointer;

      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-900']};

      transition: background-color 0.2s;

      &:hover {
        background-color: ${(props) => props.theme['yellow-100']};
      }
    }

    svg {
      color: ${(props) => props.theme['yellow-500']};
    }
  }
`
