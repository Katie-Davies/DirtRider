export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  phone?: number
  authid: string
  host: boolean
}

export interface Bikes {
  id: number
  make: string
  model: string
  engine_size: string
  location: number
  user_authid: string
  price: number
  image: string
}
