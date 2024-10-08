import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className=" hover:bg-white focus:bg-white focus:text-darkBlue hover:text-darkBlue"
    >
      Log Out
    </Button>
  )
}

export default LogoutButton
