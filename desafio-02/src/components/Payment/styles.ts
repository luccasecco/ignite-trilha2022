import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-600']};

    b {
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
const BaseButton = styled.button`
  width: 11.16rem;
  height: 3.18rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  border: 0;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px;

  font-size: 0.875rem;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['purple-900']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.33rem;
  margin-top: 2rem;
  align-items: center;
`

export const ButtonCredit = styled(BaseButton)``
export const ButtonDebit = styled(BaseButton)``
export const ButtonMoney = styled(BaseButton)``
