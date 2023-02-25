import React from 'react';
import styles from './PointConfiguration.module.css'

type props = {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const PointConfiguration = ({ visible, setVisible }: props) => {
  return (
    <div className={`${styles.pointconfiguration} ${visible ? styles.visible : ''}`}>
      <button onClick={() => setVisible(!visible)}>X</button>
      <h3>Tak</h3>
    </div>
  );
};

export default PointConfiguration
