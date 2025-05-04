import { useEffect } from 'react'
import '../cube'
import './App.module.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import ProjectList from '../ProjectList/ProjectList'
import DevBlog from '../DevBlog/DevBlog'
import GameJamList from '../GameJams/GamejamList'
import Contacts from '../Contacts/Contacts'
import { StartRender } from '../cube'

function App() {

  useEffect(StartRender, [])

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <div className="sections">
        <About></About>
        <ProjectList></ProjectList>
        <DevBlog></DevBlog>
        {/*<GameJamList></GameJamList>*/}
        <Contacts></Contacts>
      </div>
    </>
  )
}

export default App
