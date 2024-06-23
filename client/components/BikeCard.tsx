import { useNavigate } from 'react-router-dom'
// import Button from './Button'

interface Props {
  key: number
  id: number
  make: string
  model: string
  engine_size: string
  location: number
  price: number
  image: string
  user: boolean
}

export function BikeCard(bike: Props) {
  const navigate = useNavigate()
  return (
    <div key={bike.key}>
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
          {bike.user ? (
            <div className="card-actions justify-end">
              <button
                className="btn btn-sm "
                onClick={() => navigate(`${bike.id}/booking`)}
              >
                Rent Now
              </button>
            </div>
          ) : (
            <div>
              <p>Please login to book!</p>{' '}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
