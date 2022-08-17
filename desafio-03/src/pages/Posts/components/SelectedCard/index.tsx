import { ArrowSquareUpRight, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";
import { IPost } from "../..";
import { TitleContainer } from "./styles";

interface SelectedCardProps {
  post?: IPost;
  error: any
}

export function SelectedCard({post, error}: SelectedCardProps) {

  let errorMessage = "Dados não encontrados";

  if (error?.response.status === 404) {
    errorMessage = "Não foi possível encontrar essa publicação";
  }

  return (
    <>
     <TitleContainer>
        <div className="wrapper">
          <header>
          
          <div className="back-to-home">
            <CaretLeft />
            <NavLink to="/">voltar</NavLink>
          </div>

          <div className="navigation">
            <Link to="https://www.gituhub.com/luccasecco"> github </Link>
            <ArrowSquareUpRight size={18}/>
          </div>

          </header>

            <h2>{post?.title}</h2>

          <div className="icons-wrapper">
            <GithubLogo /> {post?.user.login}
            <CalendarBlank />{post?.created_at} 
            <ChatCircle /> {post?.comments} comentário{post?.comments !== 1 && "s"}
          </div>
        </div>
      </TitleContainer>
    </>
  )
}