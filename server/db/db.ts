import { Bikes, User } from '../../models/models'
import connection from './connection'

const db = connection

//GET all bikes
export async function getAllBikes() {
  return await db('bikes').select()
}

//GET Bike by ID
export async function getBikeById(id: number) {
  return await db('bikes').select().where({ id })
}

//POST add bikes
export async function addBike(data: Bikes) {
  return await db('bikes').insert(data)
}

//PATCH update bike
export async function updateBike(id: number, data: Bikes) {
  return db('bikes').where({ id }).update(data)
}
//GET user by id
export async function getUserById(id: string) {
  const user = db('users').select().where('authid', id)
  return user
}
//PATCH update user
export async function updateUser(id: string, data: User) {
  return db('user').where('authid', id).update(data)
}

//POST add user
export async function addUser(data: User) {
  return db('user').insert(data)
}
