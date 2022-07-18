import styled from 'styled-components'

export const CardContainer = styled.main`
  max-width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['gray-100']};
  margin: 2rem auto;
  padding: 0.8rem;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: -1.8rem;
  }

  span {
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-900']};
    border-radius: 100px;

    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;
    padding: 4px 8px;
    margin-top: 0.8rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-900']};

    margin-top: 1.25rem;
  }

  p {
    max-width: 13.5rem;
    color: ${(props) => props.theme['gray-400']};
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.3;
    margin-top: 0.5rem;
  }

  div {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 0.8rem;
    gap: 1rem;

    p:nth-of-type(1) {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 1.3;

      color: ${(props) => props.theme['gray-500']};
    }
  }
`

export const PriceOptionsContainer = styled.div``

export const CartButton = styled.button`
  border: 0;

  background-color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  color: ${(props) => props.theme['purple-900']};
  font-size: 1rem;
  height: 1.8rem;
  background: transparent;

  svg {
    background-color: ${(props) => props.theme['purple-900']};
    color: ${(props) => props.theme.white};
    padding: 0.3rem;
    margin-left: 0.5rem;

    border-radius: 6px;
    line-height: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
