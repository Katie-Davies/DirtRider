import { useParams } from 'react-router-dom'
import { useGetBookingById } from '../hooks/useGetBookingById'
import { useCallback, useEffect, useState } from 'react'
import useUpdateBooking from '../hooks/useUpdateBooking'
import { format } from 'date-fns'
import Button from './Button'

function EditBooking() {
  const [price, setPrice] = useState(0)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [selectedDates, setSelectedDates] = useState<Date[]>([])

  const bookingId = useParams().id
  console.log(bookingId)
  const {
    data: booking,
    isError,
    isLoading,
  } = useGetBookingById(Number(bookingId))

  const update = useUpdateBooking()
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'startDate') {
      setStartDate(new Date(event.target.value))
    }
    const start = new Date(startDate)
    if (event.target.name === 'endDate') {
      setEndDate(new Date(event.target.value))
    }
    const end = new Date(endDate)
    const dateArray = []
    for (
      let d = new Date(format(start, 'yyyy-MM,dd'));
      d <= end;
      d.setDate(d.getDate() + 1)
    ) {
      dateArray.push(new Date(d))
    }
    setSelectedDates(dateArray)
    console.log(selectedDates)
  }

  const handleSubmit = () => {
    const bookingUpdate = {
      bookingId: booking?.id,
      start_date: format(startDate ?? '', 'yyyy-MM-dd'),
      end_date: format(endDate ?? '', 'yyyy-MM-dd'),
      // price: price,
    }
    update.mutate(bookingUpdate)
  }
  const dayCounter = useCallback(() => {
    return selectedDates.length
  }, [selectedDates])

  useEffect(() => {
    const handleCost = () => {
      const price = Number(booking?.price)
      const days = dayCounter()
      console.log(price, days)
      setPrice(price * days)
    }
    if (selectedDates.length > 0) {
      handleCost()
    }
  }, [booking?.price, dayCounter, selectedDates])

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
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="w-full p-2">
            Start Date:
            <input
              type="date"
              name="startDate"
              value={format(startDate, 'yyyy-MM-dd')}
              onChange={handleDateChange}
              className="w-full p-2 border-2 border-blue-500 rounded-lg text-lg focus:border-green-500"
              min={new Date().toISOString().split('T')[0]} // Prevent selecting past dates
            />
          </label>
          <label className="w-full p-2">
            End Date:
            <input
              type="date"
              name="endDate"
              value={format(endDate, 'yyyy-MM-dd')}
              onChange={handleDateChange}
              className="w-full p-2 border-2 border-blue-500 rounded-lg text-lg focus:border-green-500"
              min={format(startDate, 'yyyy-MM-dd')} // Prevent selecting an end date before the start date
            />
          </label>
          <Button type="submit" className="mt-4">
            Confirm Booking
          </Button>
        </form>
      </div>
    </div>
  )
}

export default EditBooking
