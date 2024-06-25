import { useEffect, useState } from 'react'
import { useGetHostBookings } from '../hooks/useGetHostBookings'
import { BookingInfo } from '../../models/models'
import { BookingsCard } from './BookingsCard'

interface Props {
  currentUser?: string
}

function HostBookings(currentUser: Props) {
  const [current, setCurrent] = useState([] as BookingInfo[])
  const [previous, setPrevious] = useState([] as BookingInfo[])
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const {
    data: bookings,
    isError,
    isLoading,
  } = useGetHostBookings(currentUser.currentUser as string)

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

  if (isError)
    return <div>There is an error retreiving your bike bookings!</div>
  if (isLoading) return <div> Loading....</div>

  bookings
  console.log(bookings)
  return (
    <div className="flex flex-col justify-around">
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
  )
}

export default HostBookings
