import { useParams } from 'react-router-dom'
import { useGetBookingById } from '../hooks/useGetBookingById'
import { useCallback, useEffect, useState } from 'react'
import useUpdateBooking from '../hooks/useUpdateBooking'

function EditBooking() {
  const [price, setPrice] = useState(0)
  const [selectedDates, setSelectedDates] = useState<Date[]>([])

  const bookingId = useParams().id
  console.log(bookingId)
  const {
    data: booking,
    isError,
    isLoading,
  } = useGetBookingById(Number(bookingId))

  const update = useUpdateBooking()

  const handleSubmit = () => {
    const bookingUpdate = {
      bookingId: booking?.id,
      start_date: selectedDates[0],
      end_date: selectedDates[selectedDates.length - 1],
      price: price,
    }
    update.mutate(bookingUpdate)
  }
  const dayCounter = useCallback(() => {
    return selectedDates.length
  }, [selectedDates])

  useEffect(() => {
    const handleCost = () => {
      const price = Number(booking?.price)
      const days = dayCounter()
      console.log(price, days)
      setPrice(price * days)
    }
    if (selectedDates.length > 0) {
      handleCost()
    }
  }, [booking?.price, dayCounter, selectedDates])

  if (isLoading) {
    return <div>Loading your booking..</div>
  }
  if (isError) {
    return <div>Error retrieving Booking</div>
  }
  console.log(booking)
  return (
    <div>
      <h1>Edit Booking</h1>
      <div>
        <h1>Details: </h1>
        <ul>
          <li>{booking?.model}</li>
          <li>
            <span>From: </span>
            {booking?.start_date}
          </li>
          <li>
            <span>To: </span>
            {booking?.end_date}
          </li>
          <li>
            <span>Total Price:</span>
            {booking?.price}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default EditBooking
