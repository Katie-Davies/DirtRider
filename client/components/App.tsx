import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Homepage from './Homepage'

function App() {
  return (
    <>
      <div className="app">
        <header>
          <Nav />
        </header>
        <main className="main">
          <h1>Coming Soon!</h1>
          <Homepage />
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
