import { Seller } from "./seller"

export type Sale = {
  id: number
  visited: number
  deals: number
  amount: number
  date: string
  seller: Seller
}

export type SalePage = {
  content?: Sale[],
  totalPages: number
  totalElements: number
  last: boolean
  first: boolean
  size?: number
  number: number
  numberOfElements?: number
  empty?: boolean
}

export type SaleSum = {
  sallerName: string
  sum: number
}

export type SaleSuccess = {
  sallerName: string
  visited: number
  deals: number
}