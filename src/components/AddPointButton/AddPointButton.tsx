import React from 'react'
import styles from './AddPointButton.module.css'
import AddPointModal from '../AddPointModal/AddPointModal'
import { useState } from 'react'
import Backdrop from '../Backdrop/Backdrop'

const AddPointButton = () => {
  
  const[visible, setVisible] = useState(false)
  
  const handleClick= () => setVisible(!visible)

  return (
    <>
      <button className={styles.addpointbutton} onClick={handleClick}>AddPointButton</button>
      <AddPointModal visible={visible} setVisible={setVisible}/>
      <Backdrop visible={visible} setVisible={setVisible}/>
    </>

  )
}

export default AddPointButton



