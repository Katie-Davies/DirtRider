function EditProfile() {
  return (
    <div>
      <h1>Edit Profile</h1>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Location:
          <input type="email" />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default EditProfile
