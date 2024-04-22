import request from 'superagent'
import { Bikes } from '../../models/models'

const rootUrl = '/api/v1'

export async function getAllBikes() {
  const bikes = await request.get(`${rootUrl}/bikes`)
  return bikes.body as Bikes[]
}
