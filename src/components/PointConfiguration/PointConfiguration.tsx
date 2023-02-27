import React from 'react';
import styles from './PointConfiguration.module.css'

type props = {
  todo: {
    id: number
    text: string
  }
  handleDisable: () => void
}

const PointConfiguration = ({ handleDisable, todo}: props) => {
  return (
    <div className={styles.pointconfiguration}>
      <button onClick={handleDisable}>X</button>
      <div>
        <h2>{todo.text}</h2>
      </div>
    </div>
  );
};

export default PointConfiguration


