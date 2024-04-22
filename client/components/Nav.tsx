import { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 hover:bg-customBlue"
          >
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
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to="/"
                className=" hover:bg-customBlue  focus:bg-customBlue"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="profile"
                className=" hover:bg-customBlue focus:bg-customBlue"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="bikes"
                className=" hover:bg-customBlue  focus:bg-customBlue"
              >
                View Bikes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
