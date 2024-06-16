import { Bikes, Booking, User, UserId } from '../../models/models'
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

// GET bikes by user_id
export async function getBikesByUserId(id: string) {
  return await db('bikes').select().where('user_authid', id)
}

//POST add bikes
export async function addBike(data: Bikes) {
  return await db('bikes').insert(data)
}

//PATCH update bike
export async function updateBike(id: number, data: Bikes) {
  return await db('bikes').where({ id }).update(data)
}

//delete bike
export async function deleteBike(id: number) {
  return await db('bikes').where({ id }).del()
}

//GET user by id
export async function getUserById(id: string) {
  const user = await db('users').select().where('authid', id)
  return user
}
//PATCH update user
export async function updateUser(id: string, data: UserId) {
  return await db('users').where('authid', id).update(data)
}

//POST add user
export async function addUser(data: User) {
  return await db('users').insert(data)
}

//Post Booking
export async function addBooking(data: Booking) {
  return await db('bookings').insert(data)
}

//get renters booking
export async function getRentersBookings(id: string) {
  return await db('bookings')
    .join('bikes', 'bikes.id', 'bookings.bike_id')
    .where('bookings.user_id', id)
}

//get hosts bookings
export async function getHostsBookings(id: string) {
  return await db('bookings')
    .join('bikes', 'bikes.id', 'bookings.bike_id')
    .where('bikes.user_authid', id)
}

//delete a booking
export async function deleteBooking(id: number) {
  return await db('bookings').delete().where({ id })
}

// update booking
export async function updateBooking(id: number, data: Booking) {
  return await db('bookings').where({ id }).update(data)
}
