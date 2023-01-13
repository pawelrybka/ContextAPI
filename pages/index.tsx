import Head from 'next/head'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero/hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GlamHair Studio</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar/>
      <Hero/>
    </div>
  )
}



