import React from 'react';
import styles from './PointConfiguration.module.css'

type props = {
  todo: {
    id: number
    text: string
  }
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PointConfiguration = ({ visible, setVisible, todo }: props) => {
  return (
    <div className={`${styles.pointconfiguration} ${visible ? styles.visible : ''}`}>
      <button onClick={() => setVisible(!visible)}>X</button>
      <div>
        <h2>{todo.text}</h2>
      </div>
    </div>
  );
};

export default PointConfiguration
