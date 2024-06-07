import { useNavigate } from 'react-router-dom'
import useGetUserByID from '../hooks/useGetUserByID'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { addUser } from '../apis/apiClient'
import { User } from '../../models/models'

// const fakeData = {
//   id: 1,
//   userName: 'JohnnyDoe123',
//   name: 'John Doe',
//   email: 'johnDoe123@mail.com',
//   age: 25,
//   location: 'Taupo',
// }

function Profile() {
  //need to get auth working to grab real data authid
  const navigate = useNavigate()
  const { user } = useAuth0()
  const auth = user?.sub

  const { data: currentUser, isError, isLoading } = useGetUserByID(auth)

  useEffect(() => {
    if (isLoading) {
      console.log('Loading user')
    }
    if (isError) {
      console.log('Error finding user')
      const newUser = {
        first_name: user?.given_name,
        last_name: user?.family_name,
        email: user?.email,
        phone: user?.phone_number,
        authid: user?.sub,
        host: false,
      } as User
      addUser(newUser)
      console.log('User added')
    }
  }, [currentUser, isError, isLoading, user])

  const handleClick = () => {
    navigate(`/profile/edit/${auth}`)
  }
  if (user) {
    return (
      <div>
        <h1>Your Profile</h1>
        <div>
          <p>
            Name: {user.first_name}
            {user.last_name}
          </p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white"
          >
            Edit Profile
          </button>
        </div>
      </div>
    )
  }
}

export default Profile
