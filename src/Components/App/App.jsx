import { useEffect } from 'react'
import '../../cube'
import { StartRender } from '../../cube'
import './App.module.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import AboutMe from '../AboutMe/AboutMe'
import ProjectSection from '../ProjectSection/ProjectSection'
import DevlogCarousel from '../DevLog/DevlogCarousel'
import ContactSection from '../Contacts/ContactSection'
import { Contact } from 'lucide-react'


function App() {

  useEffect(StartRender, [])

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <ProjectSection></ProjectSection>
      <DevlogCarousel></DevlogCarousel>
      <ContactSection></ContactSection>
    </>
  )
}

export default App
