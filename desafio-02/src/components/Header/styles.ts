import styled from 'styled-components'

export const HeaderContainer = styled.header`
  max-width: 74rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2rem;
  margin: auto;

  a {
    &:focus {
      outline: none;
      box-shadow: 0 0 0 0 transparent;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 18rem;

    p {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      padding: 0.5rem;
      border-radius: 8px;
      border: 0;

      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-900']};

      svg {
        color: ${(props) => props.theme['yellow-500']};
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.2rem;
      padding: 0.4rem;
      border-radius: 8px;
      border: 0;
      background-color: ${(props) => props.theme['yellow-500']};

      svg {
        color: ${(props) => props.theme['yellow-100']};
      }

      transition: background-color 0.2s ease-out;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['yellow-900']};
      }

      &:disabled {
        opacity: 0.9;
        cursor: not-allowed;
      }
    }

    span {
      /* visibility: hidden; */
      width: 1.5rem;
      height: 1.5rem;
      border: 0;
      text-align: center;
      line-height: 0;
      border-radius: 50%;
      margin-bottom: 2.5rem;
      margin-left: -1.5rem;
      z-index: 2;

      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme['yellow-900']};
      background-color: ${(props) => props.theme['yellow-100']};
    }
  }
`
