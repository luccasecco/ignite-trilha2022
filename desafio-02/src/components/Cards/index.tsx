import { CardContainer } from './styles'
import { formatPrice } from '../../util/format'
import { useCart } from '../../hooks/useCart'

import { api } from '../../services/api'

import { useEffect, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'

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

export function Cards() {
  const [products, setProducts] = useState<ProductFormatted[]>([])
  const { addProduct } = useCart()

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

  return (
    <>
      {products.map(
        ({ id, imgUrl, name, description, price, type, type2 }: Product) => {
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
                  <p>{price}</p>
                  <button type="button" onClick={() => handleAddProduct(id)}>
                    <ShoppingCart size={23} />
                  </button>
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
                  <p>{price}</p>
                  <button>
                    <ShoppingCart size={23} />
                  </button>
                </div>
              </CardContainer>
            )
          }
        },
      )}
    </>
  )
}
