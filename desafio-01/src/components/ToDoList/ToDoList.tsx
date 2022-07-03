import { Clipboard } from "phosphor-react";
import { Container, List, ListItems } from "./styles";

export function ToDoList() {
  return (
    <Container>
    
      <List>
        <ListItems>
        <Clipboard size={56}/>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
        </ListItems>
      </List>
      
    </Container>
  )
}