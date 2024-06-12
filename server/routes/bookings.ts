import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

// Get renter Bookings
router.get('/renter/:id', async (req, res) => {
  const id = req.params.id
  try {
    const bookings = await db.getRentersBookings(id)
    res.status(200).json(bookings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retureving bookings' })
  }
})

// Get host Bookings
router.get('/host/:id', async (req, res) => {
  const id = req.params.id
  try {
    const bookings = await db.getHostsBookings(id)
    res.status(200).json(bookings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retureving bookings' })
  }
})
