import Head from 'next/head'
import Navbar from '../comps/topnavbar/Navbar'

import styles from '../styles/Home.module.css'
import Hero from '../comps/Homesection/Hero'
import Projecttext from '../comps/Projectsheading/Ourprojects'
import Navbar2 from '../comps/Secondnavbar/Navbar2'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projecttext />
    <Navbar2 />

    </>
  )
}
