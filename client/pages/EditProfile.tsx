import { useEffect, useState } from 'react'
import useGetUserByID from '../hooks/useGetUserByID'
import { useNavigate, useParams } from 'react-router-dom'
import useUpdateUser from '../hooks/useUpdateUser'
import { User } from '../../models/models'
import Button from '../components/Button'

function EditProfile() {
  const { id } = useParams()
  const updateUser = useUpdateUser()
  const navigate = useNavigate()
  const { data: user, isError, isLoading } = useGetUserByID(id ?? '')

  const [userDetails, setUserDetails] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: 0,
    host: false,
  } as User)

  useEffect(() => {
    if (user)
      setUserDetails({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        phone: user.phone || 0,
        authid: user.authid || '',
        host: user.host || false,
      } as User)
  }, [user])

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return (
      <div>
        <p>Error: There has been an error loading your data</p>
      </div>
    )
  }

  function handleChanges(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = e.target
    setUserDetails({
      ...userDetails,
      [name]: type === 'checkbox' ? checked : value,
    })
  }
  console.log(userDetails)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const postData = { ...userDetails }
    updateUser.mutate(postData)

    console.log('Form submitted')
    navigate(`/profile`)
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl">Edit Profile</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="font-bold">
          First Name:
          <input
            type="text"
            className="m-5 w-fit rounded-lg p-1"
            value={userDetails.first_name}
            name="first_name"
            onChange={handleChanges}
          />
        </label>
        <label className="font-bold">
          Last Name:
          <input
            type="text"
            className="m-5 w-fit rounded-lg p-1"
            value={userDetails.last_name}
            onChange={handleChanges}
            name="last_name"
          />
        </label>
        <label className="font-bold">
          Email:
          <input
            type="email"
            className="m-5 w-fit rounded-lg p-1"
            value={userDetails.email}
            name="email"
            onChange={handleChanges}
          />
        </label>
        <label className="font-bold">
          Phone
          <input
            type="text"
            className="m-5 w-fit rounded-lg p-1"
            value={userDetails.phone}
            name="phone"
            onChange={handleChanges}
          />
        </label>
        <label className="font-bold">
          Host:
          <input
            type="checkbox"
            className="m-5 w-fit"
            checked={userDetails.host}
            name="host"
            onChange={handleChanges}
          />
        </label>
        <Button type="submit">Save</Button>
      </form>
    </div>
  )
}

export default EditProfile
