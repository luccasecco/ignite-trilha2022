import { Link } from "react-router-dom";
import { Post } from "../..";
import { Container } from "./styles";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  
  return (
    <Container>
      <header>
        <Link to={`/post/${post.number}`}>{post.title}</Link>
        <span>{post.created_at}</span>
      </header>
      <p>
        {post.body}
      </p>
    </Container>
  )
}