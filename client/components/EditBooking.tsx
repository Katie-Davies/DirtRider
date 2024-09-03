import { useParams } from 'react-router-dom'

function EditBooking() {
  const bookingId = useParams().id
  console.log(bookingId)
  return (
    <div>
      <h1>Edit Booking</h1>
    </div>
  )
}

export default EditBooking
