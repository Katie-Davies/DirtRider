interface Props {
  key: number
  id: number
  make: string
  model: string
  start_date: string
  end_date: string
}

export function BookingsCard(booking: Props) {
  return (
    <div key={booking.id}>
      <div className="card w-96 bg-white mt-7 h-auto border-2">
        <div className="card-body">
          <h3 className="card-title">
            {booking.make} {booking.model}
          </h3>
          <p>{booking.start_date}</p>
          <p>{booking.end_date}</p>
          <div className="card-actions justify-end">
            <button className="btn mb-1">Update</button>
            <button className="btn">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}
