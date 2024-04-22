import { Link } from 'react-router-dom'
import Button from './Button'

function Nav() {
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
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
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
      </div>
    </>
  )
}

export default Nav
