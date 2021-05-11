import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './compos/Footer'
import Navbar from './compos/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <p>Well this is a homepage where everything will show up</p>
      <Footer />
    </div>
  )
}
