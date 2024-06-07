import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const user = await db.getUserById(id)

    res.json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    const user = req.body
    await db.addUser(user)
    res.json({ message: 'User added successfully' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
