import { useState } from 'react'
import { useGetHostsBikes } from '../hooks/useGetHostsBikes'
import { BikeId } from '../../models/models'
import SmallBikeCard from './SmallBikeCard'

interface Props {
  user?: string
}

function HostBikes({ user }: Props): JSX.Element {
  const { data: bikes, isLoading, isError } = useGetHostsBikes(user ?? '')
  const [bike, setBike] = useState<BikeId | null>(null)

  const handleUpdatePrice = (bike: BikeId) => {}
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
        {bikes.map(
          (bike) => (
            // return (
            //   <div key={bike.id}>
            //     <h2>
            //       {bike.make} {bike.model}
            //     </h2>
            //     {bike.image ? (
            //       <img src={`public/images/${bike.image}`} alt={bike.model} />
            //     ) : null}

            //     <p>{bike.price}</p>
            //     <button className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white">
            //       Update Price
            //     </button>
            //     <button className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white">
            //       Delete Bike
            //     </button>
            //   </div>
            <SmallBikeCard key={bike.id} {...bike} />
          ),
          // )
        )}
      </>
    )
  }
  return <h1>You have no bikes</h1>
}

export default HostBikes
