import { useNavigate } from 'react-router-dom'
import useGetUserByID from '../hooks/useGetUserByID'

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
  const { data: user, isLoading, isError } = useGetUserByID('janesmith456')
  const navigate = useNavigate()
  if (isLoading) {
    return (
      <>
        <span className="loading loading-spinner loading-md"></span>
      </>
    )
  }
  if (isError) {
    return <p>There has been a error please try again.</p>
  }

  const handleClick = () => {
    navigate(`/profile/edit/${user?.id}`)
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
