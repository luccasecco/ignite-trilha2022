import { NavLink } from 'react-router-dom'
import { CheckButton, TotalContainer } from './styles'

export function Total() {
  return (
    <>
      <TotalContainer>
        <div>
          <p>Total de itens</p>
          <p>Entrega</p>
          <h1>Total</h1>
        </div>
        <div>
          <p>R$ 29,70</p>
          <p>R$ 3,50</p>
          <p> R$ 33,20</p>
        </div>
      </TotalContainer>
      <NavLink to="/success" title="Sucesso">
        <CheckButton> Confirmar pedido</CheckButton>
      </NavLink>
    </>
  )
}
