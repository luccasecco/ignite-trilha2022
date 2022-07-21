import { createContext, ReactNode, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../services/api'
import { Product } from '../types'

interface CreateAdressData {
  cep: string
  street: string
  city: string
  complement?: string | undefined
  number: string
  district: string
  uf: string
  payment: string
}

interface CartProviderProps {
  children: ReactNode
}

interface UpdateProductAmount {
  productId: number
  amount: number
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
  payment: string
}

interface CartContextData {
  cart: Product[]
  adress: Adress[] | undefined
  activeAdress: Adress | undefined
  addProduct: (productId: number) => Promise<void>
  removeProduct: (productId: number) => void
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void
  createNewAdress: (data: CreateAdressData) => void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [adress, setAdress] = useState<Adress[]>([])
  const [activeAdressId, setActiveAdresId] = useState<string | null>(null)

  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketCoffeeDelivery:cart')

    if (storagedCart) {
      return JSON.parse(storagedCart)
    }
    return []
  })

  const addProduct = async (productId: number) => {
    try {
      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      const stock = await api.get(`/stock/${productId}`)
      const stockAmount = stock.data.amount
      const currentAmount = productExists ? productExists.amount : 0
      const amount = currentAmount + 1

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      if (productExists) {
        productExists.amount = amount
      } else {
        const product = await api.get(`/products/${productId}`)

        const newProduct = {
          ...product.data,
          amount: 1,
        }
        updatedCart.push(newProduct)
      }
      setCart(updatedCart)
      localStorage.setItem(
        '@RocketCoffeeDelivery:cart',
        JSON.stringify(updatedCart),
      )
    } catch {
      toast.error('Erro na adição do produto')
    }
  }

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart]
      const productIndex = updatedCart.findIndex(
        (product) => product.id === productId,
      )

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1)
        setCart(updatedCart)
        localStorage.setItem(
          '@RocketCoffeeDelivery:cart',
          JSON.stringify(updatedCart),
        )
      } else {
        throw Error()
      }
    } catch {
      toast.error('Erro na romoção do produto')
    }
  }

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return
      }

      const stock = await api.get(`/stock/${productId}`)

      const stockAmount = stock.data.amount

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      const updatedCart = [...cart]
      const productExists = updatedCart.find(
        (product) => product.id === productId,
      )

      if (productExists) {
        productExists.amount = amount
        setCart(updatedCart)
        localStorage.setItem(
          '@RocketCoffeeDelivery:cart',
          JSON.stringify(updatedCart),
        )
      } else {
        throw Error()
      }
    } catch {
      toast.error('Erro na alteração da quantidade do produto')
    }
  }

  function createNewAdress(data: CreateAdressData) {
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
      payment: data.payment,
    }

    setAdress((state) => [...state, newAdress])
    setActiveAdresId(id)
    // reset()
  }

  const activeAdress = adress.find((adress) => adress.id === activeAdressId)

  return (
    <CartContext.Provider
      value={{
        cart,
        adress,
        addProduct,
        removeProduct,
        updateProductAmount,
        createNewAdress,
        activeAdress,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
