import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15rem auto 0;
  height: 6rem;
  background: ${props => props.theme["gray-700"]};
  color: ${props => props.theme["blue-300"]};
`