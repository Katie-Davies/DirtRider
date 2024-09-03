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
    res.status(500).json({ message: 'Error retrieving bookings' })
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
    res.status(500).json({ message: 'Error retrieving bookings' })
  }
})
// GET booking by id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const bookings = await db.getBookingById(id)
    res.status(200).json(bookings)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving bookings' })
  }
})

// create booking
router.post('/', async (req, res) => {
  try {
    const data = req.body
    const booked = await db.addBooking(data)
    res.status(200).json(booked)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error creating booking' })
  }
})

// update booking
router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = req.body
    const updated = await db.updateBooking(id, data)
    res.status(200).json(updated)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error updating your booking' })
  }
})

// delete booking
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteBooking(id)
    res.status(200).json({ message: 'Booking deleted' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error deleting booking' })
  }
})

export default router
