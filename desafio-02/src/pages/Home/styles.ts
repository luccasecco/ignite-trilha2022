import styled from 'styled-components'

export const ContentHome = styled.main`
  max-width: 74rem;
  margin: 5.87rem auto;
`

export const HomeContainer = styled.div`
  max-width: 74rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 5.87rem auto;
`

export const TextContainer = styled.div`
  max-width: 40rem;

  h1 {
    max-width: 37rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['gray-900']};
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-600']};
    line-height: 1.3;
    margin-top: 1rem;
  }
`

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 4.125rem;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['gray-600']};
  }

  svg {
    color: ${(props) => props.theme['white-100']};
    /* margin-right: 0.75rem; */
    border-radius: 50%;
    padding: 0.5rem;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`

const BaseDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 0.5rem 0;
  text-align: left;
`

export const DivContainerCart = styled(BaseDiv)`
  max-width: 78%;
  svg {
    background: ${(props) => props.theme['yellow-500']};
  }
`
export const DivContainerTimer = styled(BaseDiv)`
  max-width: 80%;
  svg {
    background: ${(props) => props.theme['yellow-900']};
  }
`
export const DivContainerPackage = styled(BaseDiv)`
  svg {
    background: ${(props) => props.theme['gray-900']};
  }
`
export const DivContainerCoffee = styled(BaseDiv)`
  max-width: 96%;
  svg {
    background: ${(props) => props.theme['purple-900']};
  }
`

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
    margin-top: -3rem;
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
    align-items: center;
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

    button {
      transition: background-color 0.2s ease-out;

      &:hover {
        background-color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
