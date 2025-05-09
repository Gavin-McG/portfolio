import { useEffect } from 'react'
import '../cube'
import './App.module.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import { StartRender } from '../cube'

import Test from '../Test/Test'

function App() {

  useEffect(StartRender, [])

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Test></Test>
    </>
  )
}

export default App
