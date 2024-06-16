import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'
import { addBike } from '../apis/apiClient'

function AddBike() {
  const { user, getAccessTokenSilently } = useAuth0()
  const id = user?.sub
  const [newBike, setNewBike] = useState({
    make: '',
    model: '',
    engine_size: '',
    location: 0,
    user_authid: id,
    price: 0,
    image: '',
  })
  console.log(newBike.user_authid)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const token = await getAccessTokenSilently()

    const data = { ...newBike }
    addBike(data, token)
    console.log('bike added')
    setNewBike({
      make: '',
      model: '',
      engine_size: '',
      location: 0,
      user_authid: user?.sub,
      price: 0,
      image: '',
    })
  }

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setNewBike({
      ...newBike,
      [name]: value,
    })
  }

  return (
    <div>
      <h1>Add Bikes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Make:
          <input
            type="text"
            placeholder="Make"
            name="make"
            onChange={handleChanges}
            value={newBike.make}
          ></input>
        </label>
        <label>
          Model:
          <input
            type="text"
            placeholder="Model"
            name="model"
            onChange={handleChanges}
            value={newBike.model}
          ></input>
        </label>
        <label>
          Engine-Size:
          <input
            type="text"
            placeholder="Engine-Size"
            name="engine_size"
            onChange={handleChanges}
            value={newBike.engine_size}
          ></input>
        </label>
        <label>
          Location:
          <input
            type="number"
            placeholder="Location"
            name="location"
            onChange={handleChanges}
            value={newBike.location}
          ></input>
        </label>
        <label>
          Price:
          <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleChanges}
            value={newBike.price}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddBike
