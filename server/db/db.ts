import { Bikes, User, UserId } from '../../models/models'
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

//delete bike
export async function deleteBike(id: number) {
  return db('bikes').where({ id }).del()
}

//GET user by id
export async function getUserById(id: string) {
  const user = db('users').select().where('authid', id)
  return user
}
//PATCH update user
export async function updateUser(id: string, data: UserId) {
  return db('users').where('authid', id).update(data)
}

//POST add user
export async function addUser(data: User) {
  return db('users').insert(data)
}
