import React from 'react'
import styles from './ButtonSection.module.css'
import AddPointButton from '../AddPointButton/AddPointButton'

const ButtonSection = () => {
  return (
    <div className={styles.buttonsection}>
        <AddPointButton/>
    </div>
  )
}

export default ButtonSection


