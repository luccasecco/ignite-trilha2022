import styled from 'styled-components'

export const Container = styled.section`
  width: 54rem;
  height: 13.75rem;
  border-radius: 10px;
  margin: -5rem auto 0;
  background: ${(props) => props.theme['gray-800']};
  display: flex;

  img {
    width: 9.25rem;
    margin: 2rem 2rem 2.5rem;
    border-radius: 8px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    h1 {
      color: ${(props) => props.theme['gray-100']};
    }

    .navigation {
      width: 4.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        text-decoration: none;
        font-size: 0.75rem;
        color: ${(props) => props.theme['blue-300']};
        line-height: 0;
      }

      svg {
        color: ${(props) => props.theme['blue-300']};
      }
    }
  }

  .wrapper {
    width: 100%;
    color: #ffff;
    margin: 2.5rem 2rem 0 0;

    p {
      color: ${(props) => props.theme['gray-200']};
      margin-bottom: 1.5rem;
    }

    .icons-wrapper {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg:not(:first-child) {
        margin-left: 2.5rem;
      }
    }
  }
`
