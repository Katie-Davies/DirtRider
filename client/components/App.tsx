import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Homepage from '../pages/Homepage'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Nav />
        </header>
        <main className="main">
          <Outlet />
        </main>
        <footer>
          <p>DirtRider ltd 2024</p>
        </footer>
      </div>
    </>
  )
}

export default App
