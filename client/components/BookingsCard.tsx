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
  return (
    <div key={booking.id}>
      <div className="card bg-white mt-7 h-auto border-2 w-96">
        <div className="card-body">
          <h3 className="card-title">
            {booking.make} {booking.model}
          </h3>
          <div className="flex ">
            <p>From: {booking.start_date}</p>
            <p>To: {booking.end_date}</p>
          </div>
          {booking.current ? (
            <div className="card-actions justify-end">
              <Button className="btn bg-customBlue text-white">Update</Button>
              <Button className="btn  bg-customBlue text-white">Cancel</Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
