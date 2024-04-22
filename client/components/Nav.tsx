import { Button } from 'react-bootstrap'
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

        <Button>Dropdown menu</Button>
      </div>
    </>
  )
}

export default Nav
