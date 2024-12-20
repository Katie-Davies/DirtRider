import { useAuth0 } from '@auth0/auth0-react'
import { useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import Button from '../components/Button'
import useAddBike from '../hooks/useAddBike'
import { NewBike } from '../../models/models'

function AddBike() {
  const { getAccessTokenSilently } = useAuth0()
  const user = useParams()
  const id = user.id
  const [newBike, setNewBike] = useState<NewBike>({
    make: '',
    model: '',
    engine_size: '',
    location: 0,
    user_authid: id,
    price: 0,
    image: null,
  })
  const navigate = useNavigate()

  const addBike = useAddBike()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const token = await getAccessTokenSilently()
      const data = new FormData()
      for (const key in newBike) {
        data.append(key, newBike[key])
      }
      // const data = { ...newBike, user_authid: id ?? '' }
      await addBike.mutate({ data, token }) // Ensure `mutateAsync` is used for async operations
      console.log(newBike)
      console.log('bike added')
      setNewBike({
        make: '',
        model: '',
        engine_size: '',
        location: 0,
        user_authid: id,
        image: null,
      })

      navigate('/profile')
    } catch (error) {
      console.error('Error adding bike:', error)
    }
  }

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setNewBike({
      ...newBike,
      [name]: value,
    })
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewBike({ ...newBike, image: e.target.files[0] })
  }

  return (
    <div>
      <h1 className="text-3xl">Add Bikes</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap "
        encType="multipart/form-data"
      >
        <label>
          Image:
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="m-5 w-full md:w-4/6 rounded-lg p-1"
          ></input>
        </label>
        <label>
          Make:
          <input
            type="text"
            placeholder="Make"
            name="make"
            onChange={handleChanges}
            value={newBike.make}
            className="m-5 w-full md:w-4/6 rounded-lg p-1"
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
            className="m-5 w-full md:w-4/6 rounded-lg p-1"
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
            className="m-5 w-full md:w-3/6 rounded-lg p-1"
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
            className="m-5 w-full md:w-1/2 rounded-lg p-1"
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
            className="m-5 w-full md:w-4/6 rounded-lg p-1"
          ></input>
        </label>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default AddBike
