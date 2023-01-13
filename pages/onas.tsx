import React from 'react'
import Navbar from '../components/navbar/navbar'
import styles from '../styles/about.module.scss'

const onas = () => {
  return (
    <div>
      <Navbar/>
      <img src="/contact_image.png" alt="glam-hair-owner" className={styles.main__image}  />
    </div>
  )
}

export default onas