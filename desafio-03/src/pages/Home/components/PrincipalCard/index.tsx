import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { Container } from "./styles";

export function PrincipalCard() {
  return (
    <>
      <Container>
        <img src="https://avatars.githubusercontent.com/u/101674470?v=4" alt="" />
        <div className="wrapper">
          <header>
          <h1>Lucca Secco</h1>

          <div className="navigation">
          <NavLink to="https://www.gituhub.com/luccasecco">GITHUB </NavLink>
          <ArrowSquareOut size={18}/>
          </div>

          </header>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate perferendis recusandae ut dignissimos! Minima nobis impedit quis voluptatum at soluta illo eligendi magni dolor itaque porro asperiores incidunt, tenetur alias.</p>
          <div className="icons-wrapper">
            <GithubLogo /> luccasecco
            <Buildings /> Rocketseat 
            <Users /> 32 seguidores
          </div>
        </div>
      </Container>
    </>
   
  )
}