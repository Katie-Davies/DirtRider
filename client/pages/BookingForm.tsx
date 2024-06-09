import { useParams } from 'react-router-dom'
import useGetBikeByID from '../hooks/useGetBikeById'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { format } from 'date-fns'

function BookingForm() {
  const { id } = useParams()
  const { data: bike, isLoading, isError } = useGetBikeByID(id ?? '')
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const formatDate = (date) => (date ? format(date, 'dd-MM-yyyy') : '')

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
        <form>
          <label></label>
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
        </form>

        <p>{formatDate(startDate)}</p>
        <p>{formatDate(endDate)}</p>
      </>
    )
  }
}

export default BookingForm
