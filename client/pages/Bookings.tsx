import { useEffect, useState } from 'react'

import { useGetRentersBookings } from '../hooks/useGetRentersBookings'
import { Booking } from '../../models/models'

function Bookings() {
  const [current, setCurrent] = useState([] as Booking[])
  const [previous, setPrevious] = useState([] as Booking[])
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  console.log(date)

  const {
    data: bookings,
    isError,
    isLoading,
  } = useGetRentersBookings('auth0|666a55ef070ec6410faea187')
  // const bookings = getBookingByRenterId('auth0|666a55ef070ec6410faea187')
  useEffect(() => {
    const newCurrent = [] as Booking[]
    const newPrevious = [] as Booking[]
    bookings?.map((booking) => {
      if (booking.end_date < date) {
        newPrevious.push(booking)
      } else {
        newCurrent.push(booking)
      }
    })
    setCurrent(newCurrent)
    setPrevious(newPrevious)
  }, [bookings, date])

  if (isError) return <div>There is an error in retrieving your bookings.</div>
  if (isLoading) return <div>Loading...</div>

  bookings

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Bookings</h1>
        <div className="flex flex-col">
          <div>
            <h2>My Bikes </h2>
            <h2>Current bookings</h2>
            <h2>Previous bookings</h2>
          </div>
          <div>
            <h2>Rentals</h2>
            <h2>Current bookings</h2>
            {current.map((booking) => {
              return (
                <div key={booking.id}>
                  <h3>{booking.id}</h3>
                  <h3>{booking.start_date}</h3>
                  <h3>{booking.end_date}</h3>
                </div>
              )
            })}
            <h2>Previous bookings</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookings
