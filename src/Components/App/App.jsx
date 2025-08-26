import { useEffect } from 'react'
import '../../cube'
import './App.module.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import { StartRender } from '../../cube'
import ProjectSection from '../ProjectSection/ProjectSection'


function App() {

  useEffect(StartRender, [])

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <ProjectSection></ProjectSection>
    </>
  )
}

export default App
