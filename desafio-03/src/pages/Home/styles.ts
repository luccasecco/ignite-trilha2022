import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  background: ${(props) => props.theme['blue-800']};
`

export const Content = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`

export const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`