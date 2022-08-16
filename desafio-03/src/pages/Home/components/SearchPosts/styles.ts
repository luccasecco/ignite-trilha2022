import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 4.5rem; 

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: ${props => props.theme["gray-200"]};
      font-size: 1.125rem;
    }

    span {
      color: ${props => props.theme["gray-400"]};
      font-size: 0.875rem;
    }
  }

  input {
    width: 100%;
    height: 3.37rem;
    margin-top: 1.33rem;
    margin-bottom: 2rem;
    border-radius: 6px;
    border: 1px solid ${props => props.theme["gray-600"]};
    background: ${props => props.theme["gray-900"]};
    padding: 0.75rem 1rem;

    &::placeholder {
      font-size: 1rem;
      color: ${props => props.theme["gray-500"]}
    }
  }
`