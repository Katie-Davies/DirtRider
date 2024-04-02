import connection from './connection'

const db = connection

//GET all bikes
export async function getAllBikes() {
  return await db('bikes').select()
}

//GET Bike by ID
export async function getBikeById(id: string) {
  return await db('bikes').select().where({ id })
}

//POST add bikes

//PATCH update bike

//GET user by id

//PATCH update user
