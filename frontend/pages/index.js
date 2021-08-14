import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/mainnavbar/Navbar'

export default function Home() {
  return (
    <body>
      <Navbar />
      <div className="image">
        {/* <img src="/Background(hero).png" alt="herobg" /> */}
        <img src="/image 1.png" alt="image" />
      </div>
    </body>
  )
}
