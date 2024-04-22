import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Homepage from '../pages/Homepage'

function App() {
  return (
    <>
      <div className="app flex flex-col min-h-screen">
        <header>
          <Nav />
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer className="mt-auto">
          <p className="ml-10 text-darkBlue">DirtRider ltd 2024</p>
        </footer>
      </div>
    </>
  )
}

export default App
