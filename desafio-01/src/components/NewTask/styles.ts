import styled from "styled-components"


export const ContainerNewTask = styled.div`
    max-width: 736px;
    background: var(--gray-400);
    margin: .25rem auto;
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

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      list-style: none;
    }

    .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .checkmark {
      position: absolute;
      top: -.45rem;
      left: -1rem;
      height: 25px;
      width: 25px;
      background-color: transparent;
      border: 2px solid var(--blue-900);
      border-radius: 50%;
    }

    .container:hover input ~ .checkmark {
      background-color: var(--blue-900);
    }

    .container input:checked ~ .checkmark {
      background-color: #2196F3;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .container input:checked ~ .checkmark:after {
      display: block;
    }

    .container .checkmark:after {
      left: 7px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    `
