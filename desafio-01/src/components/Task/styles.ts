import styled from "styled-components";
import { NewTask } from "../NewTask/NewTask";

export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1.5rem;
  padding: 0 2%;

  input {
    width: 39.87rem;
    color: var(--gray-300);
    font-weight: bold;
    background: var(--gray-400);
    border: 0;
    border-radius: 8px;
    padding: 1rem;
  }

  button {
    background: var(--blue-900);
    border: 0;
    border-radius: 8px;
    color: var(--white);
    padding: 1rem;
    margin-left: 8px;

    display: flex;
    align-items: center;

    transition: background-color 0.2s;
  }

  button svg {
    margin-left: .3rem;
  }

  input:focus {
    outline: none;
    border: 1px solid var(--blue-300);
  }

  button:focus {
    outline: none;
    border: 1px solid var(--blue-300);
  }

  button:hover {
    background: var(--blue-300);
  }
`
export const Container = styled.div`
  max-width: 736px;
  padding: 0 2%;
  margin: 5.68rem auto 2rem;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 24px; */
  
  strong {
    color: var(--blue-300);
    
    input {
      border-radius: 8px;
      width: 25px;
      height: 19px;
      padding: 2px;
      border: 0;
      background: var(--gray-400);
      color: var(--white);
      font-weight: bold;
      text-align: center;
    }
  }

  p {
    color: var(--purple-300);

   input {
      border-radius: 8px;
      width: 25px;
      height: 19px;
      padding: 2px;
      border: 0;
      background: var(--gray-400);
      color: var(--white);
      font-weight: bold;
      text-align: center;
    }
  }

`

export const ContainerNewTask = styled.div`
    max-width: 736px;
    background: var(--gray-400);
    margin: 1rem auto;
    border-radius: 8px;
    padding: 0 2%;

    svg:nth-child(1) {
      color: var(--blue-900);
    }

    svg:last-child {
      color: var(--gray-300);

      &:hover {
        color: var(--red-400);
      }
    }

    button {
      background: transparent;
      border: none;
    }

    `

export const NewTaskContent = styled.div`
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%; 
    }

    li {
      padding: 1rem 0;
      color: var(--gray-100);   
    }

    .completed {
      p {
        text-decoration: line-through;
        opacity: 0.6;
      }
    }
`

