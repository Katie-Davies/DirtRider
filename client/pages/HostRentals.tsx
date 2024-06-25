import HostBookings from '../components/HostBookings'
import { useAuth0 } from '@auth0/auth0-react'

function HostRentals() {
  const { user } = useAuth0()
  const hostId = user?.sub
  return (
    <>
      <h1>Here are the current bookings on your rental bikes!</h1>
      <HostBookings currentUser={hostId} />
    </>
  )
}

export default HostRentals
