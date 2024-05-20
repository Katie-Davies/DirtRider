function EditProfile() {
  return (
    <div className="flex flex-col">
      <h1>Edit Profile</h1>
      <form className="flex flex-col">
        <label>
          Username:
          <input type="text" className="m-5 w-fit" />
        </label>
        <label>
          Name:
          <input type="text" className="m-5 w-fit" />
        </label>
        <label>
          Email:
          <input type="email" className="m-5 w-fit" />
        </label>
        <label>
          Location:
          <input type="email" className="m-5 w-fit" />
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
