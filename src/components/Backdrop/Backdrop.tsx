import styles from './Backdrop.module.css'
import React from 'react'

type props = { 
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Backdrop = ({visible, setVisible}: props) => {
  return <div onClick={() => setVisible(!visible)} className={`${styles.backdrop} ${visible ? styles.visible : ''}`}></div>
}

export default Backdrop
