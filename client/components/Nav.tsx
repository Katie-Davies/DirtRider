import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="nav-layout">
        <Link to="/">
          <img
            src="public/images/logo.png"
            alt="DirtRider Logo"
            className="logo"
          ></img>
        </Link>

        <button>Dropdown menu</button>
      </div>
    </>
  )
}

export default Nav
