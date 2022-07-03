import styled from "styled-components";

export const Container = styled.div`
  max-width: 736px;
  padding: 0 2%;
  margin: 1rem auto;
`

export const List = styled.div`
  border-top: 1px solid var(--gray-400);
  border-radius: 8px;
`

export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px;

  p {
    color: var(--gray-300);
    margin-top: 16px;
  }

  span {
    color: var(--gray-300);
    margin-top: 5px;
  }


  svg {
    color: var(--gray-400);
  }
`

