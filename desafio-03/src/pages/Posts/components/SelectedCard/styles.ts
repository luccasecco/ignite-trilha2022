import styled from "styled-components";

export const TitleContainer = styled.div`
  width: 54rem;
  height: 10.5rem;
  border-radius: 10px;
  margin: -5rem auto 0;
  background: ${props => props.theme["gray-800"]};
  display: flex;

  img {
    width: 9.25rem;
    margin: 2rem 2rem 2.5rem;
    border-radius: 8px;
  }

  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    a {
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.75rem;
        color: ${props => props.theme["blue-300"]};
        line-height: 0;
      }

    .navigation, .back-to-home {
      width: 4.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        color: ${props => props.theme["blue-300"]};
      }
    }

  }

  .wrapper {
    width: 100%;
    color: #ffff;
    padding: 2rem;
    
    h2 {
      color: ${props => props.theme["gray-200"]}; 
      margin: 1.5rem 0 0.5rem;
    }

    .icons-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem; 
      color: ${props => props.theme["gray-500"]}; 
      
      svg:not(:first-child) {
        margin-left: 1.5rem;
      }
    
    }
  }
`