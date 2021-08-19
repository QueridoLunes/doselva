import React from 'react';
import styles from './Contact.module.scss';

import Header from '../../components/Header/Header'

const Contact = () => {

    return (
      <div className={styles.container}>
          <Header/>
        <p>Contact</p>        
      </div>
    )
  }
  
  export default Contact;