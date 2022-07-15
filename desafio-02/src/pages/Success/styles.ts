import styled from 'styled-components'

export const TitleContainer = styled.div`
  max-width: 75rem;

  margin: 6rem auto 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-900']};
    line-height: 1.3;
    font-weight: 800;
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 0.25rem;
  }
`

export const SuccessContainer = styled.main`
  max-width: 74rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6.375rem;

  margin: 2rem auto;
`

export const InfoSuccessContainer = styled.div`
  width: 32.875rem;
  height: 16.875rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;

  border: 1.5px solid ${(props) => props.theme['purple-500']};
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

const BaseBox = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  svg {
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    color: ${(props) => props.theme['white-100']};
  }
`

export const DeliveryContent = styled(BaseBox)`
  svg {
    background: ${(props) => props.theme['purple-900']};
  }
`
export const TimeContent = styled(BaseBox)`
  svg {
    background: ${(props) => props.theme['yellow-500']};
  }
`
export const PaymentContent = styled(BaseBox)`
  svg {
    background: ${(props) => props.theme['yellow-900']};
  }
`
