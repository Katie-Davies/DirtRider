import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const bikes = await db.getAllBikes()

    res.json(bikes)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
