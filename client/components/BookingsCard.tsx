import { useNavigate } from 'react-router-dom'
import useDeleteBooking from '../hooks/useDeleteBooking'

import Button from './Button'
import { Popup } from './Popup/Popup'
import { useState } from 'react'

interface Props {
  key: number
  bookingId: number
  make: string
  model: string
  start_date: string
  end_date: string
  current: boolean
}

export function BookingsCard(booking: Props) {
  const deleteBookingMutation = useDeleteBooking()
  const navigate = useNavigate()
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleDelete = () => {
    deleteBookingMutation.mutate(booking.bookingId, {
      onSuccess: () => {
        console.log('Booking deleted successfully!')
      },
      onError: (error) => {
        console.error('Error deleting booking:', error)
      },
    })
  }
  const handleEdit = () => {
    navigate(`/bookings/edit/${booking.bookingId}`)
  }
  const confrimDelete = () => {
    setIsPopupOpen(true)
  }

  const formatDate = (dateString: string) => {
    return dateString.split('-').reverse().join('/')
  }
  return (
    <div key={booking.bookingId}>
      <div className="card bg-white mt-7 h-auto border-2 w-96 shadow-lg">
        <div className="card-body">
          <h3 className="card-title">
            {booking.make} {booking.model}
          </h3>
          <div className="flex ">
            <p>
              {formatDate(booking.start_date)} - {formatDate(booking.end_date)}
            </p>
          </div>
          {booking.current ? (
            <div className="card-actions justify-end">
              <Button
                className="btn bg-customBlue text-white"
                onClick={handleEdit}
              >
                Edit Booking
              </Button>
              <Button
                className="btn bg-customRed text-white"
                onClick={confrimDelete}
              >
                Cancel Booking
              </Button>
              <div className="z-50">
                {isPopupOpen && (
                  <Popup
                    text="Are you sure you want to delete this booking?"
                    action={handleDelete}
                    closePopup={() => setIsPopupOpen(false)}
                    content="Yes"
                  />
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
