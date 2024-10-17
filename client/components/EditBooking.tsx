import { useParams } from 'react-router-dom'
import { useGetBookingById } from '../hooks/useGetBookingById'

function EditBooking() {
  const bookingId = useParams().id
  console.log(bookingId)
  const {
    data: booking,
    isError,
    isLoading,
  } = useGetBookingById(Number(bookingId))

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
    </div>
  )
}

export default EditBooking
