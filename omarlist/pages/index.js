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
          Odileon Contact List | Home
        </title>
        <meta name="keywords" content='ninjas'/>
      </Head>
      <div>
      
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}> Odileon is a Startup company founded by famous Dr. Gilbert and his friends.
        With a vision of materializing the modern A.I. they developed Artificial Intelligent bot which can
        make innovative solutions to complex problems. Suppose the A.I. can be a great problem solver in 
        financial sectors.
        Odileon has made different potential investors, shareholders to contribute and make a large company. It
        has already gain so much popularity and therefore, people are interested to buy bots in their business.
        In this website, Odileon has made some good friends including potential clients. The client list will
        be given here and anyone can fetch the data.
        </p>
        
        <Link href="/ninjas">
          <a className={styles.btn}>Show Data</a>
        </Link>
      
      </div>
    </>
  )
}
