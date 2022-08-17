import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { formatCreatedAt } from "../../utils/formatCreatedAt";
import { SelectedCard } from "./components/SelectedCard";

import { Container, Content } from "./styles";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  comments: number;
  html_url: string;
  user: {
    login: string;
  };
}

async function fetchPost(key: string): Promise<IPost> {
  const number = key.replace(/^post\//, "");

  const { data } = await api.get<IPost>(
    `/repos/luccasecco/github-blog/issues/${number}`,
  );

  return {
    title: data.title,
    body: data.body,
    comments: data.comments,
    created_at: formatCreatedAt(data.created_at),
    html_url: data.html_url,
    user: {
      login: data.user.login,
    },
  };
}

export function Posts() {
  const { number } = useParams();
  const { data: post, error } = useSWR(`post/${number}`, fetchPost);
  
  return (
    <>
      <Container>
        <Header />
        <SelectedCard post={post} error={error}/>
        <Content>
          <p>{post?.body}</p>
        </Content>
        <Footer />
      </Container>
    </>
  )
}