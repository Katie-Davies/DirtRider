import { Link } from 'react-router-dom'
import Button from '../components/Button'

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
            <Button className="opacity-90 mt-10">View Bikes</Button>
            {/* <button className="btn sm:btn-sm md:btn-md  hover:btn-customBlue text-darkBlue">
              Bikes
            </button> */}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Homepage
