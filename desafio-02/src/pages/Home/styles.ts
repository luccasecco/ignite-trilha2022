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
    margin-right: 0.75rem;
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
  svg {
    background: ${(props) => props.theme['purple-900']};
  }
`
