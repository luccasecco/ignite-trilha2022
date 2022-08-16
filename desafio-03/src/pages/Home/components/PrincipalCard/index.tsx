import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";
import { Container } from "./styles";

interface UserGit {
  login: string;
  avatar_url: string;
  bio: string;
  followers_url: [];
}

export function PrincipalCard() {
  const { data: user, isFetching } = useApi<UserGit>('https://api.github.com/users/luccasecco')


  return (
    <>
      {isFetching && <p>carregando...</p>}
        <Container>
          <img src={user?.avatar_url} alt="" />
          <div className="wrapper">
            <header>
            <h1>{user?.login}</h1>

            <div className="navigation">
            <NavLink to="https://www.gituhub.com/luccasecco">GITHUB </NavLink>
            <ArrowSquareOut size={18}/>
            </div>

            </header>
            <p>{user?.bio}</p>
            <div className="icons-wrapper">
              <GithubLogo /> {user?.login}
              <Buildings /> Rocketseat 
              <Users /> {user?.followers_url.length} seguidores
            </div>
          </div>
        </Container>
    </>
   
  )
}