import { useEffect } from 'react'
import '../cube'
import './App.module.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import ProjectList from '../ProjectList/ProjectList'
import { StartRender } from '../cube'

function App() {

  useEffect(StartRender, [])

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="sections">
        <About></About>
        <ProjectList onPositionChange={(pos) => console.log("Position:", pos)} />
        <div style={{height: "200vw"}}></div>
      </div>
    </>
  )
}

export default App
