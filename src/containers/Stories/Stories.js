import React from 'react';
import styles from './Stories.module.scss';

import Header from '../../components/Header/Header'

const Stories = () => {

    return (
      <div className={styles.container}>
          <Header background='green'/>
        <p>Stories</p>        
      </div>
    )
  }
  
  export default Stories;