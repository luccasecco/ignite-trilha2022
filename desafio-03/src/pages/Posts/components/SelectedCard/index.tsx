import { ArrowSquareUpRight, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { TitleContainer } from "./styles";

export function SelectedCard() {
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
            <NavLink to="https://www.gituhub.com/luccasecco"> github </NavLink>
            <ArrowSquareUpRight size={18}/>
          </div>

          </header>

            <h2>JavaScript data types and data structures</h2>

          <div className="icons-wrapper">
            <GithubLogo /> luccasecco
            <CalendarBlank /> Há 1 dia 
            <ChatCircle /> 5 comentários
          </div>
        </div>
      </TitleContainer>
    </>
  )
}