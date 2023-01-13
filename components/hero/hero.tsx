import React from 'react'
import styles from './hero.module.scss'

const hero = () => {
  return (
    <div className={styles.hero}>
      <img src="./hero_logo.png" alt="glam-hair-studio-logo" className={styles.hero__logo} />
    </div>
  )
}

export default hero