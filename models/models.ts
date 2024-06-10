export interface User {
  first_name: string
  last_name: string
  email: string
  phone?: number
  authid: string
  host: boolean
}

export interface UserId extends User {
  id: number
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

export interface Booking {
  id: number
  bike_id: number
  user_id: string
  start_date: string
  end_date: string
}
