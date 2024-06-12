import request from 'superagent'
import { Bikes, User, UserId } from '../../models/models'

const rootUrl = '/api/v1'

//bikes
export async function getAllBikes() {
  const bikes = await request.get(`${rootUrl}/bikes`)
  return bikes.body as Bikes[]
}

export async function getBikeById(id: string) {
  const bike = await request.get(`${rootUrl}/bikes/${id}`)
  return bike.body[0] as Bikes
}

export async function addBike(bike: Bikes, token: string) {
  const newBike = await request
    .post(`${rootUrl}/bikes`)
    .set('Authorization', `Bearer ${token}`)
    .send(bike)
  return newBike.body as Bikes
}

//users
export async function getUserById(id: string) {
  const user = await request.get(`${rootUrl}/users/${id}`)
  return user.body[0] as UserId
}

export async function addUser(user: User) {
  const newUser = await request.post(`${rootUrl}/users`).send(user)
  return newUser.body as UserId
}

export async function updateUser(user: User) {
  console.log(user)
  const updatedUser = await request
    .put(`${rootUrl}/users/${user.authid}`)
    .send(user)
  return updatedUser.body as UserId
}
