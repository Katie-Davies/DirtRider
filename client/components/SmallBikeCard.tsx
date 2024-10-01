import { useState } from 'react'
import { BikeId } from '../../models/models'
import { Popup } from './Popup/Popup'

import useUpdateBikePrice from '../hooks/useUpdateBikePrice'
import useDeleteBike from '../hooks/useDeleteBike'

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
  const updatedPrice = useUpdateBikePrice()
  const deleteBike = useDeleteBike()
  const [updatePrice, setUpdatePrice] = useState<boolean>(false)
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)

  const handleUpdate = () => {
    setUpdatePrice(true)
    console.log('update price')
  }

  const handleUpdatePrice = () => {
    updatedPrice.mutate(updatedBike)
    // updateBike(updatedBike)
    setUpdatePrice(false)
    console.log('bike has been updated')
  }

  const handleDelete = () => {
    deleteBike.mutate(bike.id)
    console.log('bike has been deleted')
  }

  return (
    <div key={bike.id}>
      <h2 className="text-2xl">
        {bike.make} {bike.model}
      </h2>
      {bike.image ? (
        <img src={`public/images/${bike.image}`} alt={bike.model} />
      ) : null}

      <p>Daily Rate: ${bike.price}</p>
      <button
        className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white m-3"
        onClick={handleUpdate}
      >
        Update Daily Rate
      </button>
      {updatePrice ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setUpdateOpen(true)
            }}
          >
            <input
              type="number"
              value={updatedBike.price}
              onChange={(e) =>
                setUpdatedBike({
                  ...updatedBike,
                  price: parseInt(e.target.value),
                })
              }
            />
            <button onClick={() => setUpdateOpen(true)}>Submit</button>
            {updateOpen ? (
              <Popup
                text="Are you sure you want to update the daily rate?"
                action={handleUpdatePrice}
                content="update"
                closePopup={() => setUpdateOpen(false)}
              />
            ) : null}
          </form>
        </>
      ) : null}

      <button
        className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white"
        onClick={() => setDeleteOpen(true)}
      >
        Delete Bike
      </button>
      {deleteOpen ? (
        <Popup
          text="Are you sure you want to delete this bike?"
          action={handleDelete}
          closePopup={() => setDeleteOpen(false)}
          content="Yes"
        />
      ) : null}
    </div>
  )
}

export default SmallBikeCard
