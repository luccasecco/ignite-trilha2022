export interface Product {
  id: number
  name: string
  type?: string
  type2?: string
  description?: string
  price: number
  imgUrl: string
  amount: number
}

export interface Stock {
  id: number
  amount: number
}
