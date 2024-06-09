import { useParams } from 'react-router-dom'

function BookingForm() {
  const { id } = useParams()

  console.log(id)
  return <h1>Booking Form</h1>
}

export default BookingForm
