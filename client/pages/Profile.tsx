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
      <div className="flex justify-around w-full mt-10">
        <div className="bg-white w-1/3 rounded-lg  border-buttonBlue border-4">
          <div className="flex justify-center flex-col flex-wrap content-center pt-10">
            <h1 className="text-4xl mb-3 text-darkBlue">Your Profile</h1>
            <p className="m-3">
              <span className="text-xl font-extrabold pr-3">Name:</span>
              {currentUser?.first_name} {currentUser?.last_name}
            </p>
            <p className="m-3">
              <span className="text-xl font-extrabold pr-3">Email:</span>{' '}
              {currentUser?.email}
            </p>
            <p className="m-3">
              <span className="text-xl font-extrabold pr-3">Phone:</span>{' '}
              {currentUser?.phone}
            </p>
            <div>
              <Button
                onClick={handleClick}
                className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white m-5"
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-4xl">Your bikes</h2>
            {currentUser?.host ? (
              <Button
                onClick={handleAddBike}
                className="border-4 border-customBlue rounded-md p-2 bg-customBlue text-white m-5"
              >
                {' '}
                Add A Bike
              </Button>
            ) : null}
          </div>

          {currentUser?.host && auth ? (
            <HostBikes user={auth} />
          ) : (
            <div>
              <p>No Hosted bikes</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Profile
