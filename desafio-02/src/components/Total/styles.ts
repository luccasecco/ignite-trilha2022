import styled from 'styled-components'

export const TotalContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 23rem;

  p {
    margin-top: 1rem;
  }

  p:nth-child(3) {
    font-weight: bold;
    font-size: 1.25rem;
  }

  h1 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`

export const CheckButton = styled.button`
  width: 23rem;
  height: 2.875rem;

  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme['white-100']};

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: bold;

  margin-top: 1.5rem;

  border: 0;
  border-radius: 8px;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-900']};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-500']};
  }
`
