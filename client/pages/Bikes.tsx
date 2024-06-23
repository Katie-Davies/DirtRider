import useGetAllBikes from '../hooks/useGetAllBikes'
import { BikeCard } from '../components/BikeCard'
import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

function Bikes() {
  const { user } = useAuth0()
  const { data: bikes, isLoading, isError } = useGetAllBikes()
  const [currentUser, setCurrentUser] = useState(false)
  if (user) {
    setCurrentUser(true)
  }

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
              <BikeCard
                id={bike.id}
                key={index}
                make={bike.make}
                model={bike.model}
                engine_size={bike.engine_size}
                location={bike.location}
                price={bike.price}
                image={bike.image}
                user={currentUser}
              />
            )
          })}
        </div>
      </div>
    )
}

export default Bikes
