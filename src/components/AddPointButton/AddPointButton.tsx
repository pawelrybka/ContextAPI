import React from 'react'
import styles from './AddPointButton.module.css'
import AddPointModal from '../AddPointModal/AddPointModal'
import { useState } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import { AnimatePresence } from 'framer-motion'


const AddPointButton = () => {
  
  const[visible, setVisible] = useState(false)

  return (
    <>
      <button className={styles.addpointbutton} onClick={() => setVisible(!visible)}>AddPointButton</button>
      <AnimatePresence>
        {visible && 
          <>
            <AddPointModal 
              visible={visible} 
              setVisible={setVisible}
            />
            <Backdrop 
              visible={visible} 
              setVisible={setVisible}
            />
          </>
        }
      </AnimatePresence>
    </>
  )
}

export default AddPointButton



