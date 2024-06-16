import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0'

import * as db from '../db/db'

const router = Router()

//get all
router.get('/', async (req, res) => {
  try {
    const bikes = await db.getAllBikes()

    res.json(bikes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})
//get by id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const bike = await db.getBikeById(id)
    res.json(bike)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'something went wrong' })
  }
})

//add a bike
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const data = req.body
  const user = req.auth?.sub

  if (!user) {
    res.status(401).json({ message: 'Unauthorised' })
  }
  try {
    const userExists = await db.getUserById(user ?? '')
    if (userExists[0].host) {
      await db.addBike(data)
      res.status(201).send('Bike added')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'An error occurred, bike was not added' })
  }
})

//update bike
router.patch('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const data = req.body
  try {
    const updateBike = await db.updateBike(id, data)
    res.status(200).json(updateBike)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'An error occurred, bike was not updated' })
  }
})

//delete bike
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteBike(id)
    res.status(200).json({ message: 'Bike deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'An error occurred, bike was not deleted' })
  }
})

export default router
