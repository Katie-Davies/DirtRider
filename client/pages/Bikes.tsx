import { useNavigate } from 'react-router-dom'
import useGetAllBikes from '../hooks/useGetAllBikes'

function Bikes() {
  const navigate = useNavigate()
  const { data: bikes, isLoading, isError } = useGetAllBikes()

  if (isLoading) {
    return (
      <>
        <span className="loading loading-spinner loading-md"></span>
      </>
    )
  }

  if (isError) {
    return <p>There has been a error please try again.</p>
  }
  if (bikes)
    return (
      <div>
        <h1 className="text-6xl text-center mb-5 text-darkBlue">Bikes</h1>
        <div className="flex flex-wrap justify-center">
          {bikes.map((bike, index) => {
            return (
              <div key={index}>
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

                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-sm "
                        onClick={() => navigate(`${bike.id}/booking`)}
                      >
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default Bikes
