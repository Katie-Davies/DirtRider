import { useState } from 'react'
import { BikeId } from '../../models/models'
import { updateBike } from '../apis/apiClient'

function SmallBikeCard(bike: BikeId): JSX.Element {
  const [updatedBike, setUpdatedBike] = useState<BikeId>({
    id: bike.id,
    make: bike.make,
    model: bike.model,
    engine_size: bike.engine_size,
    location: bike.location,
    user_authid: bike.user_authid,
    price: bike.price,
    image: bike.image,
  })
  const [updatePrice, setUpdatePrice] = useState<boolean>(false)
  const handleUpdate = () => {
    setUpdatePrice(true)
    console.log('update price')
  }

  const handleUpdatePrice = () => {
    updateBike(updatedBike)
    console.log('bike has been updated')
  }
  return (
    <div key={bike.id}>
      <h2>
        {bike.make} {bike.model}
      </h2>
      {bike.image ? (
        <img src={`public/images/${bike.image}`} alt={bike.model} />
      ) : null}

      <p>{bike.price}</p>
      <button
        className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white"
        onClick={handleUpdate}
      >
        Update Price
      </button>
      {updatePrice ? (
        <>
          <input
            type="number"
            value={updatedBike.price}
            onChange={(e) =>
              setUpdatedBike({
                ...updatedBike,
                price: parseInt(e.target.value),
              })
            }
            onSubmit={handleUpdatePrice}
          />
          <button onClick={handleUpdatePrice}>Submit</button>
        </>
      ) : null}

      <button className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white">
        Delete Bike
      </button>
    </div>
  )
}

export default SmallBikeCard
