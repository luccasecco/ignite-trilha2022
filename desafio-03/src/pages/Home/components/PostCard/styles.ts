import styled from "styled-components";

export const Container = styled.div`
  width:26rem;
  height: 16.25rem;

  padding: 2rem;
  
  border-radius: 10px;
  background: ${props => props.theme["gray-700"]};

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a {
      text-decoration: none;
      max-width: 17.68rem;
      font-size: 1.25rem;
      color: ${props => props.theme["gray-100"]};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["gray-400"]};
    }
  }

  p {
    color: ${props => props.theme["gray-300"]};
    line-height: 1.6rem;
  }
`