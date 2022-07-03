import { Header } from "./components/Header/Header"
import { Task } from "./components/Task/Task"
import { GlobalStyle } from "./styles/global"
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
     <ToastContainer 
      autoClose={2500}
      pauseOnHover={false}
    />
    <Header /> 
    <Task />
    <GlobalStyle />
    </>
  )
}

export default App
