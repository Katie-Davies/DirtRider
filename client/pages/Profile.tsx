import { useNavigate } from 'react-router-dom'

const fakeData = {
  id: 1,
  userName: 'JohnnyDoe123',
  name: 'John Doe',
  email: 'johnDoe123@mail.com',
  age: 25,
  location: 'Taupo',
}

function Profile() {
  const navigate = useNavigate()

  //need to get auth working to grab real data
  const handleClick = () => {
    navigate(`/profile/edit/${fakeData.id}`)
  }

  return (
    <div>
      <h1>Your Profile</h1>
      <div>
        <p>Username: {fakeData.userName}</p>
        <p>Name: {fakeData.name}</p>
        <p>Email: {fakeData.email}</p>
        <p>Age: {fakeData.age}</p>
        <p>Location: {fakeData.location}</p>
      </div>
      <div>
        <button onClick={handleClick}>Edit Profile</button>
      </div>
    </div>
  )
}

export default Profile
