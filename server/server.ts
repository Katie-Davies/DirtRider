import express from 'express'
import * as Path from 'node:path'

import users from './routes/users'
import bikes from './routes/bikes'
import bookings from './routes/bookings'

const server = express()

server.use(express.json())
server.use('/api/v1/users', users)
server.use('/api/v1/bikes', bikes)
server.use('/api/v1/bookings', bookings)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
