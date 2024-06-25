import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Homepage from './pages/Homepage.tsx'
import Bikes from './pages/Bikes.tsx'
import AddBike from './pages/AddBike.tsx'

import Profile from './pages/Profile.tsx'
import EditProfile from './pages/EditProfile.tsx'
import BookingForm from './pages/BookingForm.tsx'
import Bookings from './pages/Bookings.tsx'
import HostRentals from './pages/HostRentals.tsx'

export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="bikes" element={<Bikes />} />
      <Route path="bikes/add/:id" element={<AddBike />} />
      <Route path="bikes/:id/booking" element={<BookingForm />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/edit/:id" element={<EditProfile />} />
      <Route path="bookings" element={<Bookings />} />
      <Route path="rentals" element={<HostRentals />} />
    </Route>
  </>,
)
