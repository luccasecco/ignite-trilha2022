import { useForm } from 'react-hook-form'
// import { Payment } from '../Payment/Payment'
import { useCart } from '../../hooks/useCart'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Bank,
  Money,
} from 'phosphor-react'

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
  ButtonContainer,
  InputCredit,
  InputDebit,
  InputMoney,
} from './styles'
// import { useState } from 'react'

const newAdressValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(5, 'Informe o nome da sua rua'),
  city: zod.string().min(5, 'Informe o nome da sua cidade'),
  complement: zod.string().min(1, 'Informe o complemento'),
  number: zod.string().min(1, 'Informe o número da sua residência'),
  district: zod.string().min(1, 'Informe o nome do seu bairro'),
  uf: zod.string().min(1, 'Informe a UF da sua residência'),
  payment: zod.string().min(1, 'Informe o tipo de pagamento'),
})

interface NewAdressFormProps {
  cep: string
  street: string
  city: string
  complement?: string | undefined
  number: string
  district: string
  uf: string
  payment: string
}

export function Form() {
  const { createNewAdress } = useCart()
  // const [selectValue, setSelectValue] = useState('')

  // const paymentOption = [
  //   { id: 1, name: 'Cartão de Crédito' },
  //   { id: 2, name: 'Cartão de Débito' },
  //   { id: 3, name: 'Dinheiro' },
  // ]

  const { register, handleSubmit } = useForm<NewAdressFormProps>({
    resolver: zodResolver(newAdressValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      city: '',
      complement: '',
      district: '',
      uf: '',
      payment: '',
    },
  })

  return (
    <FormContainer>
      <HeaderContainer>
        <MapPinLine size={24} />
        <p>
          Endereço de Entrega <br />
          <b>Informe o endereço onde deseja receber seu pedido</b>
        </p>
      </HeaderContainer>
      <form onSubmit={handleSubmit(createNewAdress)} action="">
        <InputContainer>
          <InputCep
            type="text"
            placeholder="CEP"
            {...register('cep')}
            required
          />
          <br />
          <InputStreet
            type="text"
            placeholder="Rua"
            {...register('street')}
            required
          />
          <br />
          <InputNumberOfHouse
            type="text"
            placeholder="Número"
            {...register('number')}
            required
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
            required
          />
          <InputCity
            type="text"
            placeholder="Cidade"
            {...register('city')}
            required
          />
          <InputFederativeUnit
            type="text"
            placeholder="UF"
            {...register('uf')}
            required
          />
        </InputContainer>
        <PaymentContainer>
          <HeaderContainer>
            <CurrencyDollar size={24} />
            <p>
              Pagamento <br />
              <b>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </b>
            </p>
          </HeaderContainer>
          <ButtonContainer>
            <InputCredit>
              <CreditCard size={16} />
              <input
                type="radio"
                value="Cartão de crédito"
                {...register('payment')}
              />
              Cartão de crédito
            </InputCredit>

            <InputDebit>
              <Bank size={16} />
              <input
                type="radio"
                value="Cartão de débito"
                {...register('payment')}
              />
              Cartão de Débito
            </InputDebit>

            <InputMoney>
              <Money size={16} />
              <input type="radio" value="Dinheiro" {...register('payment')} />
              Dinheiro
            </InputMoney>
          </ButtonContainer>

          <CheckButton>Confirmar endereço de entrega</CheckButton>
        </PaymentContainer>
      </form>
    </FormContainer>
  )
}
