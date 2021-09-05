import Head from 'next/head'
import Navbar from '../components/topnavbar/Navbar'

import styles from '../styles/Home.module.css'
import Hero from '../components/Homesection/Hero'
import Projecttext from '../components/Projectsheading/Ourprojects'
import Navbar2 from '../components/Secondnavbar/Navbar2'
import Footer from "../components/footer/footer";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projecttext />
    {/* <Navbar2 /> */}
    {/* <Apicall /> */}
    <Projects />
      <Footer/>

    </>
  )
}
