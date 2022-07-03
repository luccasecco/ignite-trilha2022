import { createGlobalStyle} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`
    :root {
      --gray-100: #F2F2F2;
      --gray-200: #D9D9D9;
      --gray-300: #808080;
      --gray-400: #333333;
      --gray-450: #454545;
      --gray-500: #262626;
      --gray-600: #1A1A1A;
      --gray-700: #0D0D0D;

      --purple-300: #8284FA;
      --purple-900: #5E60CE;

      --blue-300: #4EA8DE;
      --blue-900: #1E6F9F;

      --red-400: #E25858;

      --white: #F2F2F2;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body, button, input {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: var(--gray-600);
    --webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
`