import useDeleteBooking from '../hooks/useDeleteBooking'
import { deleteBooking } from '../apis/apiClient'
import Button from './Button'

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
              <Button className="btn bg-customBlue text-white">
                Edit Booking
              </Button>
              <Button
                className="btn bg-customRed text-white"
                onClick={handleDelete}
              >
                Cancel Booking
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
