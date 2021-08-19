import React from 'react';
import styles from './About.module.scss';

import Header from '../../components/Header/Header'

const About = () => {

    return (
      <div className={styles.container}>
          <Header/>
        <p>About</p>        
      </div>
    )
  }
  
  export default About;