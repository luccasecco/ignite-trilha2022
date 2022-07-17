import { ShoppingCartSimple } from 'phosphor-react'
import { CardContainer, CartButton, MinusButton, PlusButton } from './styles'

import api from '../../services/api'

// interface CardsProps {
//   id: number
//   name: string
//   type: string
//   type2?: string
//   description: string
//   price: number
//   img: string
// }

export function Cards() {
  const coffeesOptions = api

  return (
    <>
      {coffeesOptions.map((coffee) => {
        if (coffee.type2) {
          return (
            <CardContainer key={coffee.id}>
              <img src={coffee.img} alt="" />
              <div>
                <span>{coffee.type}</span>
                <span>{coffee.type2}</span>
              </div>
              <h1>{coffee.name}</h1>
              <p>{coffee.description}</p>

              <div>
                <p>{coffee.price}</p>

                <p>
                  <MinusButton>-</MinusButton>1<PlusButton>+</PlusButton>
                </p>

                <CartButton>
                  <ShoppingCartSimple size={28} />
                </CartButton>
              </div>
            </CardContainer>
          )
        } else {
          return (
            <CardContainer key={coffee.id}>
              <img src={coffee.img} alt="" />
              <div>
                <span>{coffee.type}</span>
              </div>
              <h1>{coffee.name}</h1>
              <p>{coffee.description}</p>

              <div>
                <p>{coffee.price}</p>

                <p>
                  <MinusButton>-</MinusButton>1<PlusButton>+</PlusButton>
                </p>

                <CartButton>
                  <ShoppingCartSimple size={28} />
                </CartButton>
              </div>
            </CardContainer>
          )
        }
      })}
    </>
  )
}
