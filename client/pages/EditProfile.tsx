import { useEffect, useState } from 'react'
import useGetUserByID from '../hooks/useGetUserByID'
import { useParams } from 'react-router-dom'
import useUpdateUser from '../hooks/useUpdateUser'
import { User } from '../../models/models'

function EditProfile() {
  const { id } = useParams()
  const updateUser = useUpdateUser()
  const { data: user, isError, isLoading } = useGetUserByID(id)

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
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        authid: user.authid,
        host: user.host,
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
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    })
  }
  console.log(userDetails)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const postData = { ...userDetails }
    updateUser.mutate(postData)

    console.log('Form submitted')
  }

  return (
    <div className="flex flex-col">
      <h1>Edit Profile</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            className="m-5 w-fit"
            value={userDetails.first_name}
            name="first_name"
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            className="m-5 w-fit"
            value={userDetails.last_name}
            onChange={handleChanges}
            name="last_name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            className="m-5 w-fit"
            value={userDetails.email}
            name="email"
            onChange={handleChanges}
          />
        </label>
        <label>
          Phone
          <input
            type="text"
            className="m-5 w-fit"
            value={userDetails.phone}
            name="phone"
            onChange={handleChanges}
          />
        </label>
        <label>
          Host:
          <input
            type="checkbox"
            className="m-5 w-fit"
            checked={userDetails.host}
            name="host"
            onChange={handleChanges}
          />
        </label>
        <button
          type="submit"
          className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white "
        >
          Save
        </button>
      </form>
    </div>
  )
}

export default EditProfile
