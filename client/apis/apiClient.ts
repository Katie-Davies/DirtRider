import request from 'superagent'
import { Bikes, User, UserId } from '../../models/models'

const rootUrl = '/api/v1'

export async function getAllBikes() {
  const bikes = await request.get(`${rootUrl}/bikes`)
  return bikes.body as Bikes[]
}

export async function getUserById(id: string) {
  const user = await request.get(`${rootUrl}/users/${id}`)
  return user.body[0] as UserId
}

export async function addUser(user: User) {
  const newUser = await request.post(`${rootUrl}/users`).send(user)
  return newUser.body as UserId
}
