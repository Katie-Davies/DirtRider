import { useParams } from 'react-router-dom'

function BookingForm() {
  const { id } = useParams()

  return <h1>Booking Form</h1>
}

export default BookingForm
