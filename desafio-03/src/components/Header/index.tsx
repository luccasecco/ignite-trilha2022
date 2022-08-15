import bgImg from '../../assets/cover.svg'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <img src={bgImg} alt="" />
    </Container>
  )
}