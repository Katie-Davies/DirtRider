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

  return (
    <div>
      <h1>Edit Booking</h1>
    </div>
  )
}

export default EditBooking
