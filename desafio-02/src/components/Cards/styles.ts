import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['gray-100']};
  margin: 2rem auto;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: -1rem;
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
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-top: 2.5rem;
    gap: 1rem;

    p:nth-of-type(1) {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 1.3;

      color: ${(props) => props.theme['gray-500']};
    }

    p {
      max-width: 5rem;
      height: 1.8rem;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      /* justify-content: space-around; */
      background-color: ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-900']};
      border-radius: 6px;
      font-size: 1rem;
      font-family: 'Roboto';
      padding: 0.2rem;
      line-height: 0;
    }

    svg {
      background-color: ${(props) => props.theme['purple-900']};
      color: ${(props) => props.theme.white};
      padding: 0.3rem;

      border-radius: 6px;
      line-height: 0;
    }
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

export const CartButton = styled(BaseButton)`
  border: 0;
  background: red;
  height: 1.8rem;
  background: transparent;
`
