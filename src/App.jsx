import { useState } from 'react'
// import './App.css'
import Header from './components/header/Header'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
    </>
  )
}

export default App
