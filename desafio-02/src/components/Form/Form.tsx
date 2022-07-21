import { MapPinLine } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { Payment } from '../Payment/Payment'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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
import { useState } from 'react'

const newAdressValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(5, 'Informe o nome da sua rua'),
  city: zod.string().min(5, 'Informe o nome da sua cidade'),
  complement: zod.string().min(5, 'Informe o complemento'),
  number: zod.string().min(1, 'Informe o número da sua residência'),
  district: zod.string().min(1, 'Informe o nome do seu bairro'),
  uf: zod.string().min(1, 'Informe a UF da sua residência'),
})

interface NewAdressFormProps {
  cep: string
  street: string
  number: string
  complement?: string | undefined
  city: string
  district: string
  uf: string
}

interface Adress {
  id: string
  cep: string
  street: string
  number: string
  complement?: string | undefined
  city: string
  district: string
  uf: string
}

export function Form() {
  const [adress, setAdress] = useState<Adress[]>([])
  const [activeAdressId, setActiveAdresId] = useState<string | null>(null)

  const { register, handleSubmit, formState, reset } =
    useForm<NewAdressFormProps>({
      resolver: zodResolver(newAdressValidationSchema),
      defaultValues: {
        cep: '',
        street: '',
        number: '',
        city: '',
        complement: '',
        district: '',
        uf: '',
      },
    })

  function handleFormSubmit(data: NewAdressFormProps) {
    const id = String(new Date().getTime())

    const newAdress = {
      id,
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      district: data.district,
      city: data.city,
      uf: data.uf,
    }

    setAdress((state) => [...state, newAdress])
    setActiveAdresId(id)
    reset()
  }

  const activeAdress = adress.find((adress) => adress.id === activeAdressId)
  console.log(activeAdress)
  console.log(formState.errors)

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
          <Payment />
          <CheckButton>Confirmar endereço de entrega</CheckButton>
        </PaymentContainer>
      </form>
    </FormContainer>
  )
}
