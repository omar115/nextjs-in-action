import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './compos/Footer'
import Navbar from './compos/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Omar List Page | Home
        </title>
        <meta name="keywords" content='ninjas'/>
      </Head>
      <div>
      
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Text messaging, or texting, is the act of composing and sending electronic messages, 
        typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, 
        desktops/laptops, or other type of compatible computer. Text messages may be sent over a cellular network, 
        or may also be sent via an Internet connection.

        The term originally referred to messages sent using the Short Message Service (SMS). 
        It has grown beyond alphanumeric text to include multimedia messages using the Multimedia Messaging Service (MMS) 
        containing digital images, videos, and sound content, as well as ideograms known as emoji 
        (happy faces, sad faces, and other icons), and instant messenger applications 
        (usually the term is used when on mobile devices).</p>
        
        <Link href="/ninjas">
          <a className={styles.btn}>Show Omar List</a>
        </Link>
      
      </div>
    </>
  )
}
