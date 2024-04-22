import useGetAllBikes from '../hooks/useGetAllBikes'

function Bikes() {
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
        <h1 className="text-4xl text-center">Bikes</h1>
        <div className="flex flex-wrap justify-center">
          {bikes.map((bike, index) => {
            return (
              <div key={index}>
                <div className="card bg-base-100 shadow-xl w-60 h-auto cursor-pointer relative m-5">
                  <figure>
                    <img
                      src={`/images/${bike.image}`}
                      alt={bike.model}
                      className="ml-3 mt-3 h-40 w-64 rounded"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{bike.make}</h2>
                    <ul>
                      <li>Model: {bike.model}</li>
                      <li>Engine size: {bike.engine_size}</li>

                      <li>Location: {bike.location}</li>
                      <li>Price per day: $ {bike.price}</li>
                    </ul>

                    <div className="card-actions justify-end">
                      <button className="btn btn-sm btn-secondary ">
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
