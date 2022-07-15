import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import deliveryImg from '../../assets/delivery.svg'

import {
  DeliveryContent,
  InfoSuccessContainer,
  PaymentContent,
  SuccessContainer,
  TimeContent,
  TitleContainer,
} from './styles'

export function Success() {
  return (
    <>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>
      <SuccessContainer>
        <InfoSuccessContainer>
          <DeliveryContent>
            <MapPin size={32} />
            <p>
              Entrega em{' '}
              <strong>
                Rua joão Daniel Martinelli, 102
                <br />
                <b>Farrapos - Porto Alegre, RS</b>
              </strong>
            </p>
          </DeliveryContent>

          <TimeContent>
            <Timer size={32} />
            <p>
              Previsão de entrega <br />
              <b>20 min - 30 min</b>
            </p>
          </TimeContent>

          <PaymentContent>
            <CurrencyDollar size={32} />
            <p>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </p>
          </PaymentContent>
        </InfoSuccessContainer>
        <img src={deliveryImg} alt="" />
      </SuccessContainer>
    </>
  )
}
