const fakeData = {
  userName: 'JohnnyDoe123',
  name: 'John Doe',
  email: 'johnDoe123@mail.com',
  age: 25,
  location: 'Taupo',
}

function Profile() {
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
        <button>Edit Profile</button>
      </div>
    </div>
  )
}

export default Profile
