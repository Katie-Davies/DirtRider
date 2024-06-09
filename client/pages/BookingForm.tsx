import { useParams } from 'react-router-dom'

function BookingForm() {
  const { id } = useParams()
  const { data: bike, isLoading, isError } = useGetBikeByID(id)
  return
  ;<h1>Booking Form</h1>
}

export default BookingForm
