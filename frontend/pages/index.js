import Head from 'next/head'
import Navbar from '../components/topnavbar/Navbar'

import styles from '../styles/Home.module.css'
import Hero from '../components/Homesection/Hero'
import Projecttext from '../components/Projectsheading/Ourprojects'
import Navbar2 from '../components/Secondnavbar/Navbar2'
import Projects from '../components/Projects/Projects'
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projecttext />
    <Navbar2 />
    <Projects />
      <Footer/>

    </>
  )
}
