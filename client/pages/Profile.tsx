import { useNavigate } from 'react-router-dom'
import useGetUserByID from '../hooks/useGetUserByID'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react'
import { addUser } from '../apis/apiClient'
import { User } from '../../models/models'

import HostBikes from '../components/HostBikes'
import Button from '../components/Button'

function Profile() {
  //need to get auth working to grab real data authid
  const navigate = useNavigate()
  const { user } = useAuth0()
  const auth = user?.sub

  const { data: currentUser, isError, isLoading } = useGetUserByID(auth ?? '')

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
  const handleAddBike = () => {
    navigate(`/bikes/add/${auth}`)
  }

  if (user) {
    return (
      <div>
        <h1>Your Profile</h1>
        <div>
          <p>
            Name: {currentUser?.first_name} {currentUser?.last_name}
          </p>
          <p>Email: {currentUser?.email}</p>
          <p>Phone: {currentUser?.phone}</p>

          {currentUser?.host ? (
            <Button
              onClick={handleAddBike}
              className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white"
            >
              {' '}
              Add Bike
            </Button>
          ) : null}
        </div>
        <div>
          <Button
            onClick={handleClick}
            className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white"
          >
            Edit Profile
          </Button>
        </div>
        {currentUser?.host && auth ? (
          <HostBikes user={auth} />
        ) : (
          <div>
            <h2>My bikes</h2>
            <p>No Hosted bikes</p>
          </div>
        )}
      </div>
    )
  }
}

export default Profile
