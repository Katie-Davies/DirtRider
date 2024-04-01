function Searchbar() {
  return (
    <>
      <div className="searchbar">
        <form>
          <input type="text" placeholder="Make" name="make" />
          <input type="text" placeholder="Model" name="model" />
          <input type="text" placeholder="Engine Size" name="engine" />
          <input type="text" placeholder="Location" name="location" />
          <button type="submit">Search</button>
        </form>
      </div>
      <button className="button">Browse All</button>
    </>
  )
}

export default Searchbar
