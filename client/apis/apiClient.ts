import request from 'superagent'
import { BikeId, Bikes, Booking, User, UserId } from '../../models/models'

const rootUrl = '/api/v1'

//bikes
export async function getAllBikes() {
  const bikes = await request.get(`${rootUrl}/bikes`)
  return bikes.body as BikeId[]
}

export async function getBikeById(id: string) {
  const bike = await request.get(`${rootUrl}/bikes/${id}`)
  return bike.body[0] as BikeId
}

export async function addBike(bike: Bikes, token: string) {
  const newBike = await request
    .post(`${rootUrl}/bikes`)
    .set('Authorization', `Bearer ${token}`)
    .send(bike)
  return newBike.body as Bikes
}

//update bike
export async function updateBike(data: BikeId) {
  const updatedBike = await request
    .post(`${rootUrl}/bikes/${data.id}`)
    .send(data)
  return updatedBike.body as BikeId
}
//delete bike
export async function deletebBike(id: number) {
  return await request.del(`${rootUrl}/bikes/${id}`)
}

//users---------->>>>
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

//get Users Bikes
export async function getHostBikes(id: string) {
  const bikes = await request.get(`${rootUrl}/bikes/user/${id}`)
  return bikes.body as BikeId[]
}

//Booking ------>>>>>>>
export async function addBooking(booking: Booking) {
  const addBooking = await request.post(`${rootUrl}/bookings`).send(booking)
  return addBooking.body as Booking
}

export async function deleteBooking(id: number) {
  return await request.del(`${rootUrl}/bookings/${id}`)
}

export async function getBookingByRenterId(id: string) {
  const booking = await request.get(`${rootUrl}/bookings/renter/${id}`)
  return booking.body as Booking[]
}
