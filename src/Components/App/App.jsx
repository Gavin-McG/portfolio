import { useEffect } from 'react'
import '../../cube'
import { StartRender } from '../../cube'
import './App.module.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'
import ProjectSection from '../ProjectSection/ProjectSection'


function App() {

  useEffect(StartRender, [])

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <ProjectSection></ProjectSection>
    </>
  )
}

export default App
