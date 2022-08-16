import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme['blue-800']};
`

export const Content = styled.div`
  max-width: 54rem;
  margin: 2.5rem auto;

  p {
    color: ${props => props.theme["gray-400"]};
    font-size: 1.25rem;
    line-height: 2rem;
  }
`

