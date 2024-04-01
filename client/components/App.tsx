import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Nav />
        </header>
        <main className="main">
          <img src="public/images/logo.png" alt="DirtRider Logo"></img>
          <h1>Coming Soon!</h1>
          <Outlet />
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
