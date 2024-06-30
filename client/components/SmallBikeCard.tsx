import { BikeId } from '../../models/models'

function SmallBikeCard(bike: BikeId): JSX.Element {
  return (
    <div key={bike.id}>
      <h2>
        {bike.make} {bike.model}
      </h2>
      {bike.image ? (
        <img src={`public/images/${bike.image}`} alt={bike.model} />
      ) : null}

      <p>{bike.price}</p>
      <button className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white">
        Update Price
      </button>
      <button className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white">
        Delete Bike
      </button>
    </div>
  )
}

export default SmallBikeCard
