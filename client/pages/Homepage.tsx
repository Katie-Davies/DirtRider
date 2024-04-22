import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Searchbar from '../components/Searchbar'

function Homepage() {
  return (
    <>
      <div className="home-main">
        <div className="home-main-bg">
          <div>
            <h1 className="text-4xl text-center text-white">
              Stop wishing and start hiring!
            </h1>
            <h1 className="text-2xl text-center text-white">
              Find a bike today!
            </h1>
          </div>
          <Link to="/bikes">
            <Button className="opacity-80 mt-10">View Bikes</Button>
          </Link>
        </div>

        {/* <div className="home-main-card">
          <img src="/images/mainpageSmallicon1.png" alt="muddy bike wheel" />
          <h1>The sign of a good day!</h1>
        </div>
        <div className="home-main-card">
          <h1>Riding with friends!</h1>
          <img
            src="/images/mainpageSmallicon2.png"
            alt="two dirtbikes in field"
          />
        </div>
        <div className="home-main-card">
          <img src="/images/mainpageSmallicon3.png" alt="muddy boot" />
          <h1>No better feeling!</h1>
        </div> */}
      </div>
    </>
  )
}

export default Homepage