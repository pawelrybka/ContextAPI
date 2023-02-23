import React from 'react'
import styles from './AddPointButton.module.css'
import AddPointModal from '../AddPointModal/AddPointModal'
import { useState } from 'react'

const AddPointButton = () => {
  
  const[visible, setVisible] = useState(false)
  
  const handleClick= () => setVisible(!visible)

  return (
    <>
      <button className={styles.addpointbutton} onClick={handleClick}>AddPointButton</button>
      {visible && <AddPointModal />}
    </>

  )
}

export default AddPointButton



