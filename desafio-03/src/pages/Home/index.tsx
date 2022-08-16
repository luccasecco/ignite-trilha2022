import { Header } from "../../components/Header";
import { PostCard } from "./components/PostCard";
import { PrincipalCard } from "./components/PrincipalCard";
import { SearchPosts } from "./components/SearchPosts";
import { Container, Content, Posts } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
      <PrincipalCard />
      <SearchPosts />

      <Posts>
      <PostCard /> 
      <PostCard /> 
      <PostCard /> 
      <PostCard /> 
      <PostCard /> 
      <PostCard /> 

      </Posts>


      </Content>
    </Container>
  )
}
