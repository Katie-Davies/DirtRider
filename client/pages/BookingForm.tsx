import { useNavigate, useParams } from 'react-router-dom'
import useGetBikeByID from '../hooks/useGetBikeById'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useCallback, useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useAuth0 } from '@auth0/auth0-react'
import { Booking } from '../../models/models'
import useAddBooking from '../hooks/useAddBooking'
import Button from '../components/Button'
import { Popup } from '../components/Popup/Popup'

function BookingForm() {
  const { user } = useAuth0()
  const { id } = useParams()
  const { data: bike, isLoading, isError } = useGetBikeByID(id ?? '')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [confirmed, setConfirmed] = useState(false)
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [price, setPrice] = useState(0)
  const [confirmBooking, setConfirmBooking] = useState(false)

  const addBooking = useAddBooking()
  const navigate = useNavigate()

  const handleDateChange = (date: Date[]) => {
    const [start, end] = date
    setStartDate(start) // Provide a default value for startDate
    setEndDate(end) // Provide a default value for endDate
    const dateArray = []
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      dateArray.push(new Date(d))
    }
    setSelectedDates(dateArray)
  }

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

  const handleConfirm = () => {
    setConfirmBooking(true)
  }

  const formatDate = (date: Date) => (date ? format(date, 'dd-MM-yyyy') : '')

  const dayCounter = useCallback(() => {
    return selectedDates.length
  }, [selectedDates])

  useEffect(() => {
    const handleCost = () => {
      const price = Number(bike?.price)
      const days = dayCounter()
      console.log(price, days)
      setPrice(price * days)
    }
    if (selectedDates.length > 0) {
      handleCost()
    }
  }, [bike?.price, dayCounter, selectedDates])

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
        <h1 className="text-3xl">Booking Form</h1>
        <div className="flex flex-wrap w-full justify-around mt-10">
          <div className="card bg-customBlue shadow-xl  h-auto cursor-pointer relative m-5 w-80">
            <figure>
              <img
                src={`/images/${bike.image}`}
                alt={bike.model}
                className="ml-3 mt-3 h-48 w-4/5 rounded"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-darkBlue">{bike.make}</h2>
              <ul>
                <li>
                  <strong>Model:</strong> {bike.model}
                </li>
                <li>Engine size: {bike.engine_size}</li>
                <li>Location: {bike.location}</li>
                <li>Price per day: $ {bike.price}</li>
              </ul>
            </div>
          </div>

          {!confirmed ? (
            <div className="w-5/6 md:w-1/3 bg-white border-solid border-2  shadow-lg rounded-lg flex justify-center flex-col flex-wrap h-auto content-center my-3">
              <h2 className="text-center text-2xl py-3">Select your dates</h2>
              <DatePicker
                placeholderText="Pick a date"
                onChange={handleDateChange} // Fix: Provide a default value for the date parameter
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd-MM-yyyy"
                selectsRange={true}
                isClearable={true}
                minDate={new Date()} //this stops user picking a date before today
                className="w-full p-2 border-2 border-blue-500 rounded-lg text-lg focus:border-green-500"
              />
              <h1 className="text-l font-bold my-5">
                You have selected dates:
              </h1>
              <p>
                <span className="font-bold mb-3">From: </span>
                {formatDate(startDate)}
              </p>
              <p>
                <span>To:</span> {formatDate(endDate)}{' '}
              </p>

              <p className="text-green-800 font-bold my-5">
                Total cost: ${price}
              </p>
              <Button onClick={handleConfirm} className="mb-2">
                Confirm booking
              </Button>
              {confirmBooking && (
                <Popup
                  text="Are you sure you want to confirm this booking?"
                  closePopup={() => setConfirmBooking(false)}
                  action={() => handleSubmit()}
                  content="Confirm Booking"
                />
              )}
            </div>
          ) : (
            <div>
              <h3>Your Booking has been confirmed</h3>
              <Button onClick={() => navigate(`/bookings`)}>
                View your bookings here
              </Button>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default BookingForm
