import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import Homepage from './pages/Homepage.tsx'
import Bikes from './pages/Bikes.tsx'
import AddBike from './pages/AddBike.tsx'
import Booking from './pages/Booking.tsx'
import Profile from './pages/Profile.tsx'
export default createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="bikes" element={<Bikes />} />
      <Route path="bikes/add" element={<AddBike />} />
      <Route path="bikes/:id/booking" element={<Booking />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  </>,
)
