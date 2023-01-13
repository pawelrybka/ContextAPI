import React from 'react'
import styles from './navbar.module.scss'

const navbar = () => {
  return (
    <div className={styles.navbar}>
      <img src="./logo_navbar.png" alt="glam-hair-logo" className={styles.navbar__logo}/>
      <ul>
        <li>
          <a href="/kontakt">Kontakt</a>
        </li>
        <li>
          <a href="/cennik">Cennik</a>
        </li>
        <li>
          <a href="/onas">O nas</a>
        </li>
      </ul>
      <button>
        
      </button>
    </div>
  )
}

export default navbar
