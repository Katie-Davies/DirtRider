import React from 'react'
import { useGetHostsBikes } from '../hooks/useGetHostsBikes'

interface Props {
  user?: string
}

function HostBikes({ user }: Props): JSX.Element {
  const { data: bikes, isLoading, isError } = useGetHostsBikes(user ?? '')

  if (isLoading) {
    return <h1>Your bikes are loading...</h1>
  }
  if (isError) {
    return <h1>There was an error loading your bikes!</h1>
  }
  if (bikes) {
    return (
      <>
        <h1>My Bikes </h1>
        {bikes.map((bike) => {
          return (
            <div key={bike.id}>
              <h2>
                {bike.make} {bike.model}
              </h2>
              <img src={bike.image} alt={bike.model} />
              <button>Update Price</button>
              <button>Delete Bike</button>
            </div>
          )
        })}
      </>
    )
  }
  return <h1>You have no bikes</h1>
}

export default HostBikes
