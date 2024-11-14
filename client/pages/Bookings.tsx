import { useEffect, useState } from 'react'

import { useGetRentersBookings } from '../hooks/useGetRentersBookings'
import { BookingInfo } from '../../models/models'
import { BookingsCard } from '../components/BookingsCard'
import { useAuth0 } from '@auth0/auth0-react'
import HostBookings from '../components/HostBookings'
import Button from '../components/Button'

function Bookings() {
  const [current, setCurrent] = useState([] as BookingInfo[])
  const [previous, setPrevious] = useState([] as BookingInfo[])
  const [display, setDisplay] = useState(5)
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const { user } = useAuth0()
  const currentUser = user?.sub
  console.log(date)

  const {
    data: bookings,
    isError,
    isLoading,
  } = useGetRentersBookings(currentUser as string)

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

  const displayBookings = previous.slice(0, display)

  if (isError) return <div>There is an error in retrieving your bookings.</div>
  if (isLoading) return <div>Loading...</div>

  const handleMore = () => {
    setDisplay(display + 5)
  }
  const handleLess = () => {
    setDisplay(display - 5)
  }

  bookings

  return (
    <>
      <div className="flex flex-col items-center justify-center  w-full">
        <h1 className="text-4xl font-bold">Bookings</h1>
        <div className="flex flex-col w-full">
          <div>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col">
                <h2 className="text-2xl"> Current bookings</h2>
                {current.map((booking) => {
                  return (
                    <BookingsCard
                      bike_id={booking.bike_id}
                      bookingId={booking.bookingId}
                      key={booking.bookingId}
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
                <h1 className="text-2xl">Your History</h1>
                {displayBookings.map((booking) => {
                  return (
                    <BookingsCard
                      bike_id={booking.bike_id}
                      bookingId={booking.bookingId}
                      key={booking.bookingId}
                      model={booking.model}
                      make={booking.make}
                      start_date={booking.start_date}
                      end_date={booking.end_date}
                      current={false}
                    />
                  )
                })}
                {display < previous.length ? (
                  <Button onClick={handleMore} className="m-5">
                    Show More
                  </Button>
                ) : (
                  <Button onClick={handleLess} className="m-5">
                    Show Less
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookings
