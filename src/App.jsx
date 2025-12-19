import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Stats from './pages/Stats'

function App() {
  return (
    <>
      <div>
        <nav className="navbar">
          <h1>Tyler Ham</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/projects">Projects</Link></li>        
            <li><Link to="/stats">Stats</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </>
  )
}

export default App
