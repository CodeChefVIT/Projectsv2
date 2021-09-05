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
      <Head>
        <title>CodeChef-VIT || Projects</title>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="Website for Open-Source Projects made by CodeChef-VIT"/>
          <meta name="keywords"
                content="codechef,codechef-vit,vit,vellore,vellore-institute-of-technology,vellore institute of technology"/>
          <meta name="author" content="Vishesh Bansal & Sahas Vivek"/>
          <meta name="copyright" content="Vishesh Bansal"/>
          <meta name="language" content="en"/>
          <meta name="url" content="https://projects.codechefvit.com"/>
          <meta name="category" content="Projects Website"/>
          <meta name="coverage" content="Worldwide"/>
          <meta name="rating" content="General"/>
          <meta name="og:email" content="contact@codechefvit.com"/>
          <meta name="og:country-name" content="India"/>
          <meta name="og:region" content="Vellore"/>
          <meta name="og:site_name" content="CodeChef-VIT || Projects"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="CodeChef-VIT || Projects"/>
          <meta property="og:description" content="Website for Open-Source Projects made by CodeChef-VIT"/>
          <meta property="og:url" content="https://projects.codechefvit.com"/>
          <meta property="og:site_name" content="CodeChef-VIT || Projects"/>
          <meta name="twitter:card" content="website"/>
          <meta name="twitter:site" content="Website for Open-Source Projects made by CodeChef-VIT"/>
          <meta name="twitter:title" content="CodeChef-VIT || Projects"/>
          <meta name="twitter:description" content="Website for Open-Source Projects made by CodeChef-VIT"/>
          <meta name="twitter:creator" content="@VisheshBansal17"/>
          <meta itemProp="name" content="CodeChef-VIT || Projects"/>
          <meta itemProp="description" content="Website for Open-Source Projects made by CodeChef-VIT"/>
          <link rel="canonical" href="https://projects.codechefvit.com"/>
      </Head>
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
