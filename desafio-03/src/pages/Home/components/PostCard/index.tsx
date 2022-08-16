import { Link } from "react-router-dom";
import { Container } from "./styles";

export function PostCard() {
  return (
    <Container>
      <header>
        <Link to='/posts'>JavaScript data types and data structures</Link>
        <span>Há 1 dia</span>
      </header>
      <p>
      Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in... 
      </p>
    </Container>
  )
}