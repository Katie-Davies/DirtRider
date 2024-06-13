import { useNavigate, useParams } from 'react-router-dom'
import useGetBikeByID from '../hooks/useGetBikeById'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { format } from 'date-fns'
import { useAuth0 } from '@auth0/auth0-react'
import { Booking } from '../../models/models'
import useAddBooking from '../hooks/useAddBooking'

function BookingForm() {
  const { user } = useAuth0()
  const { id } = useParams()
  const { data: bike, isLoading, isError } = useGetBikeByID(id ?? '')
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const addBooking = useAddBooking()
  const navigate = useNavigate()

  const handleSubmit = () => {
    const bookingData = {
      bike_id: bike?.id,
      user_id: user?.sub,
      start_date: format(startDate ?? '', 'yyyy-MM-dd'),
      end_date: format(endDate ?? '', 'yyyy-MM-dd'),
    } as Booking
    console.log('Booking data:', bookingData)
    addBooking.mutate(bookingData)
    setConfirmed(true)
  }

  const formatDate = (date: Date) => (date ? format(date, 'dd-MM-yyyy') : '')

  if (isLoading) {
    console.log('Loading bike')
    return <span className="loading loading-spinner loading-md"></span>
  }
  if (isError) {
    console.log('Error finding bike')
    return <p>There is an error loading the bike</p>
  }

  if (bike) {
    return (
      <>
        <h1>Booking Form</h1>
        <div className="flex flex-wrap">
          <div className="w-64">
            <h2>{bike.make}</h2>
            <ul>
              <li>
                <strong>Model:</strong> {bike.model}
              </li>
              <li>Engine size: {bike.engine_size}</li>
              <li>Location: {bike.location}</li>
              <li>Price per day: $ {bike.price}</li>
            </ul>
          </div>

          {!confirmed ? (
            <div>
              <h2>Select your dates</h2>
              <DatePicker
                placeholderText="start"
                onChange={(date) => {
                  const [start, end] = date
                  setStartDate(start)
                  setEndDate(end)
                }} // Fix: Provide a default value for the date parameter
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd-MM-yyyy"
                selectsRange={true}
                isClearable={true}
              />
              <p>You have selected dates:</p>
              <p>{formatDate(startDate)}</p>
              <p>{formatDate(endDate)}</p>

              <button onClick={handleSubmit}>Confirm booking</button>
            </div>
          ) : (
            <div>
              <h3>Your Booking has been confirmed</h3>
              <button onClick={() => navigate(`/bookings/${user?.sub}`)}>
                {' '}
                View your bookings here
              </button>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default BookingForm
