import { formatPrice } from '../../util/format'
import { useCart } from '../../hooks/useCart'
import { ButtonCart } from '../ButtonCart/ButtonCart'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { CardContainer } from './styles'

interface Product {
  id: number
  name: string
  type: string
  type2?: string
  description: string
  price: number
  imgUrl: string
  amount: number
}

interface ProductFormatted extends Product {
  priceFormatted: string
}

interface CartItemsAmount {
  [key: number]: number
}

export function Cards() {
  const [products, setProducts] = useState<ProductFormatted[]>([])
  const { addProduct, cart } = useCart()

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<Product[]>('products')

      const data = response.data.map((product: Product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))

      setProducts(data)
    }

    loadProducts()
  }, [])

  function handleAddProduct(id: number) {
    addProduct(id)
  }

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[product.id] = product.amount

    return newSumAmount
  }, {} as CartItemsAmount)

  return (
    <>
      {products.map(
        ({
          id,
          imgUrl,
          name,
          description,
          priceFormatted,
          type,
          type2,
        }: ProductFormatted) => {
          if (type2) {
            return (
              <CardContainer key={id}>
                <img src={imgUrl} alt={description} />
                <div>
                  <span>{type}</span>
                  <span>{type2}</span>
                </div>
                <h1>{name}</h1>
                <p>{description}</p>

                <div>
                  <p>{priceFormatted}</p>
                  <ButtonCart onUpdateQuantity={() => handleAddProduct(id)} />
                  <span>{cartItemsAmount[id] || 0}</span>
                </div>
              </CardContainer>
            )
          } else {
            return (
              <CardContainer key={id}>
                <img src={imgUrl} alt="" />
                <div>
                  <span>{type}</span>
                </div>
                <h1>{name}</h1>
                <p>{description}</p>

                <div>
                  <p>{priceFormatted}</p>
                  <ButtonCart onUpdateQuantity={() => handleAddProduct(id)} />
                  <span>{cartItemsAmount[id] || 0}</span>
                </div>
              </CardContainer>
            )
          }
        },
      )}
    </>
  )
}
