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
