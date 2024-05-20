import request from 'superagent'
import { Bikes, User } from '../../models/models'

const rootUrl = '/api/v1'

export async function getAllBikes() {
  const bikes = await request.get(`${rootUrl}/bikes`)
  return bikes.body as Bikes[]
}

export async function getUserById(id: number) {
  const user = await request.get(`${rootUrl}/users/${id}`)
  return user.body as User
}
