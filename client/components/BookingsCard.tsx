import useUpdateBooking from '../hooks/useUpdateBooking'
import Button from './Button'

interface Props {
  key: number
  id: number
  make: string
  model: string
  start_date: string
  end_date: string
  current: boolean
}

export function BookingsCard(booking: Props) {
  const handleClick = () => {}

  const handleDelete = () => {}

  const formatDate = (dateString: string) => {
    return dateString.split('-').reverse().join('/')
  }
  return (
    <div key={booking.id}>
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
              <Button className="btn bg-customRed text-white">
                Cancel Booking
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
