import { useState } from 'react'
import meowLogo from './assets/power.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import BeenThere from './components/beenthere.jsx';
import NavBar from './components/navbar.jsx';
import HeroLogo from './components/hero-logo.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<NavBar />
		<HeroLogo />
    </>
  )
}

export default App
