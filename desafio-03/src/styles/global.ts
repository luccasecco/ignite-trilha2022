import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
    /* background: ${(props) => props.theme['blue-800']}; */
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
  }
`