import { Link } from 'react-router-dom'
import Login from './Login'
import { useState } from 'react'
import Logout from './Logout'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { user } = useAuth0()
  const userID = user?.sub

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  return (
    <>
      <div className="nav-layout">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="DirtRider Logo"
            className="logo"
          ></img>
        </Link>
        {!user ? <Login /> : null}

        <div className="dropdown dropdown-end">
          <div onClick={toggleDropdown}>
            <button className="btn m-1 hover:bg-customBlue bg-transparent border-transparent hover:border-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current bg-transparent"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-customBlue rounded-box w-52"
            >
              <li>
                <Link
                  to="/"
                  className=" hover:bg-white  focus:bg-customBlue focus:text-darkBlue text-white hover:text-darkBlue"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="bikes"
                  className=" hover:bg-white  focus:bg-white focus:text-darkBlue text-white hover:text-darkBlue"
                >
                  View Bikes
                </Link>
              </li>
              {userID ? (
                <>
                  <li>
                    <Link
                      to="profile"
                      className=" hover:bg-white focus:bg-white focus:text-darkBlue text-white hover:text-darkBlue"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="bookings"
                      className=" hover:bg-white focus:bg-white focus:text-darkBlue text-white hover:text-darkBlue"
                    >
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="rentals"
                      className=" hover:bg-white focus:bg-white focus:text-darkBlue text-white hover:text-darkBlue"
                    >
                      My Rentals
                    </Link>
                  </li>
                  <li>
                    <Logout />
                  </li>
                </>
              ) : null}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default Nav
