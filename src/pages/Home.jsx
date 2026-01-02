import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skill from "../components/Skills"
const Home = () => {
  return (
    <div className='min-h-screen bg-[#070a13]'>
<Navbar/>
<main>
    <Hero/>
    <About/>
    <Skill/>
</main>
    </div>
  )
}

export default Home