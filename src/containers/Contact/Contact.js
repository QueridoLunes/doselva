import React from 'react';
import styles from './Contact.module.scss';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import dosselvamano from '../../assets/images/doselva_mano2.png';

const Contact = () => {

    return (
      <div className={styles.container}>
        <Header background='green'/>
        <div className={styles.contactContainer}>
          <div className={styles.text}>
            <h1>
              Doselva is actively seeking new, <br/>
              long-term relationships with companies <br/>
              interested in sustainable sourcing <br/>
              of turmeric, ginger, cardamom, vanilla, <br/>
              lemon grass, hibiscus, and more.
            </h1>
            <p className={styles.subtitle}>Please call for our technical speciﬁcations, price quote or for samples.</p>
          </div>
        </div>
        <div className={styles.contactSection}>
          <div className={styles.data}>
            <h1 className={styles.mail}>
              Contact <br/>
              <a href='mailto:info@doselva.com' target="_blank" rel="noreferrer">info@doselva.com</a>

            </h1>
            <h1 className={styles.whatsapp}>
              Whatsapp or call <br/>
              <a href="https://api.whatsapp.com/send?phone=50586815356&text=Hello" target="_blank" rel="noreferrer">+505 8681 5356</a>
            </h1>
          </div>
          <div className={styles.image}>
            <img src={dosselvamano} alt="hand"/>
          </div>
        </div>
        <Footer/>       
      </div>
    )
  }
  
  export default Contact;