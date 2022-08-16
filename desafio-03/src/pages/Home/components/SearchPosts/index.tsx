import { Container } from "./styles";

export function SearchPosts() {
  return (
    <Container>
    <header>
      <h2>Publicações</h2>
      <span>6 publicações</span>
    </header>
    
    <input type="text" placeholder="Buscar conteúdo"/>
    </Container>
  )
}