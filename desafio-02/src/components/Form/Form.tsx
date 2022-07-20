import { MapPinLine } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Payment } from '../Payment/Payment'

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
  CheckButton,
  InputContainer,
  PaymentContainer,
} from './styles'

export function Form() {
  const { register, handleSubmit } = useForm()

  function handleFormSubmit(data: any) {
    console.log(data)
  }

  return (
    <FormContainer>
      <HeaderContainer>
        <MapPinLine size={24} />
        <p>
          Endereço de Entrega <br />
          <b>Informe o endereço onde deseja receber seu pedido</b>
        </p>
      </HeaderContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)} action="">
        <InputContainer>
          <InputCep type="text" placeholder="CEP" {...register('cep')} />
          <br />
          <InputStreet type="text" placeholder="Rua" {...register('street')} />
          <br />
          <InputNumberOfHouse
            type="text"
            placeholder="Número"
            {...register('number', { valueAsNumber: true })}
          />
          <InputComplement
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          <br />
          <InputDistrict
            type="text"
            placeholder="Bairro"
            {...register('district')}
          />
          <InputCity type="text" placeholder="Cidade" {...register('city')} />
          <InputFederativeUnit
            type="text"
            placeholder="UF"
            {...register('UF')}
          />
        </InputContainer>
        <PaymentContainer>
          <Payment />
          <CheckButton>Confirmar endereço de entrega</CheckButton>
        </PaymentContainer>
      </form>
    </FormContainer>
  )
}
