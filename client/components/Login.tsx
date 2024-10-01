import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button'

function Login() {
  const { loginWithRedirect } = useAuth0()

  function handleLogin() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'login',
        redirect_uri: `${window.location.origin}/profile`,
      },
    })
  }

  return (
    <Button onClick={handleLogin} className="w-auto ">
      Log in
    </Button>
  )
}

export default Login
