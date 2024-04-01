import Searchbar from './Searchbar'

function Homepage() {
  return (
    <>
      <div className="home-main">
        <div className="home-main-bg">
          <Searchbar />
        </div>
        <div className="home-main-card">
          <img
            src="public/images/mainpageSmallicon1.png"
            alt="muddy bike wheel"
          />
          <h1>The sign of a good day!</h1>
        </div>
        <div className="home-main-card">
          <h1>Riding with friends!</h1>
          <img
            src="public/images/mainpageSmallicon2.png"
            alt="two dirtbikes in field"
          />
        </div>
        <div className="home-main-card">
          <img src="public/images/mainpageSmallicon3.png" alt="muddy boot" />
          <h1>No better feeling!</h1>
        </div>
      </div>
    </>
  )
}

export default Homepage
