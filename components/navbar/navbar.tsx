import { useState }  from 'react'
import react from 'react'
import styles from './navbar.module.scss'

const navbar = () => {
  const [isMenu, setMenu] = useState(false)

  const handleClick = () => setMenu(!isMenu)
  
  return (
    <div className={styles.navbar}>
      <a href="/">
        <img src="./hero_logo.png" alt="glam-hair-logo" className={styles.navbar__logo}/>
      </a>
      <ul className={isMenu ? styles.active : ''}>
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
      <button onClick={handleClick}>
        <div className={isMenu ? styles.active : ''}></div>
        <div className={isMenu ? styles.active : ''}></div>
      </button>
    </div>
  )
}

export default navbar
