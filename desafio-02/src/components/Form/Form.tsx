import { MapPinLine } from 'phosphor-react'
import {
  FormContainer,
  HeaderContainer,
  InputCep,
  InputStreet,
  InputNumberOfHouse,
  InputComplement,
  InputDistrict,
  InputCity,
  InputFederativeUnit,
} from './styles'

export function Form() {
  return (
    <FormContainer>
      <HeaderContainer>
        <MapPinLine size={24} />
        <p>
          Endereço de Entrega <br />
          <b>Informe o endereço onde deseja receber seu pedido</b>
        </p>
      </HeaderContainer>
      <form action="">
        <InputCep type="text" placeholder="CEP" />
        <br />
        <InputStreet type="text" placeholder="Rua" />
        <br />
        <InputNumberOfHouse type="text" placeholder="Número" />
        <InputComplement type="text" placeholder="Complemento" />
        <br />
        <InputDistrict type="text" placeholder="Bairro" />
        <InputCity type="text" placeholder="Cidade" />
        <InputFederativeUnit type="text" placeholder="UF" />
      </form>
    </FormContainer>
  )
}
