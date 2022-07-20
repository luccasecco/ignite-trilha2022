import { useCart } from '../../hooks/useCart'
import { Trash } from 'phosphor-react'
import { formatPrice } from '../../util/format'
import { NavLink } from 'react-router-dom'

import {
  QuantityContainer,
  SelectedCoffeeContainer,
  ButtonRemove,
  ButtonContainer,
  MinusButton,
  PlusButton,
  TotalContainer,
  CheckButton,
  CoffeeCard,
} from './styles'

interface Product {
  id: number
  name: string
  price: number
  imgUrl: string
  amount: number
}

export function SelectedCoffee() {
  const { cart, removeProduct, updateProductAmount } = useCart()

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }))

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.amount * product.price + 3.5
    }, 0),
  )

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 })
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 })
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  return (
    <SelectedCoffeeContainer>
      {cartFormatted.map((product) => (
        <div key={product.id}>
          <CoffeeCard>
            <img src={product.imgUrl} alt="" />
            <QuantityContainer>
              <h1>{product.name}</h1>
              <ButtonContainer>
                <MinusButton
                  type="button"
                  disabled={product.amount <= 1}
                  onClick={() => handleProductDecrement(product)}
                >
                  -
                </MinusButton>
                <input type="text" readOnly value={product.amount} />
                <PlusButton onClick={() => handleProductIncrement(product)}>
                  +
                </PlusButton>
                <ButtonRemove onClick={() => handleRemoveProduct(product.id)}>
                  <Trash size={20} />
                  Remover
                </ButtonRemove>
              </ButtonContainer>
            </QuantityContainer>
            <span>{product.priceFormatted}</span>
          </CoffeeCard>
        </div>
      ))}
      <TotalContainer>
        <div>
          <p>Total de itens</p>
          <p>Entrega</p>
          <h1>Total</h1>
        </div>
        <div>
          <p>
            {cartFormatted.reduce((acc, product) => {
              return acc + product.amount
            }, 0)}
          </p>
          <p>R$ 3,50</p>
          <p>{total}</p>
        </div>
      </TotalContainer>

      <NavLink to="/success" title="Sucesso">
        <CheckButton>Confirmar pedido</CheckButton>
      </NavLink>
    </SelectedCoffeeContainer>
  )
}
