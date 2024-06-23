import { useEffect, useState } from 'react'

import { useGetRentersBookings } from '../hooks/useGetRentersBookings'
import { BookingInfo } from '../../models/models'
import { BookingsCard } from '../components/BookingsCard'

function Bookings() {
  const [current, setCurrent] = useState([] as BookingInfo[])
  const [previous, setPrevious] = useState([] as BookingInfo[])
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  console.log(date)

  const {
    data: bookings,
    isError,
    isLoading,
  } = useGetRentersBookings('auth0|666a55ef070ec6410faea187')
  // const bookings = getBookingByRenterId('auth0|666a55ef070ec6410faea187')
  useEffect(() => {
    const newCurrent = [] as BookingInfo[]
    const newPrevious = [] as BookingInfo[]
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
      <div className="flex flex-col items-center justify-center  w-full">
        <h1 className="text-4xl font-bold">Bookings</h1>
        <div className="flex flex-col w-full">
          <div>
            <h2>My Bikes </h2>
            <h2>Current bookings</h2>
            <h2>Previous bookings</h2>
          </div>
          <div>
            <h2 className=" flex justify-center text-4xl">Rentals</h2>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col">
                <h2 className="text-2xl"> Current bookings</h2>
                {current.map((booking) => {
                  return (
                    <BookingsCard
                      id={booking.id}
                      key={booking.id}
                      model={booking.model}
                      make={booking.make}
                      start_date={booking.start_date}
                      end_date={booking.end_date}
                      current={true}
                    />
                  )
                })}
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl">Previous bookings</h1>
                {previous.map((booking) => {
                  return (
                    <BookingsCard
                      id={booking.id}
                      key={booking.id}
                      model={booking.model}
                      make={booking.make}
                      start_date={booking.start_date}
                      end_date={booking.end_date}
                      current={false}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookings
