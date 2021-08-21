import React from 'react';
import styles from './Impact.module.scss';
import {NavLink} from 'react-router-dom';

import dosselvaimpactbanner from '../../assets/images/Doselva_Impact.jpg';
import dosselvaimpactbanner2 from '../../assets/images/Doselva_Impact_02.jpg';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Impact = () => {

    return (
      <div className={styles.container}>
        <Header background='green'/>
        <div className={styles.impactContainer}>
          <div className={styles.text}>
            <p className={styles.headerTitle}>Social Impact</p>
            <h1>Doselva as an anchor business</h1>
            <p className={styles.subtitle}>Smallholder farmers when selling alone are at a disadvantage when trying to access <br/> formal, proﬁtable markets. The Doselva supply chain puts the small farmer ﬁrst:</p>
            <img src={dosselvaimpactbanner} alt='impactbanner'/>
          </div>
        </div>
        <div className={styles.messageContainer}>
          <div className={styles.messageBox}>
            <p>Learn more about our social impact</p>
          </div>
        </div>
        <div className={styles.envContainer}>
          <div className={styles.envText}>
            <p className={styles.envHeaderTitle}>Environmental Impact</p>
            <h1>Agroforestry</h1>
            <p className={styles.envSubtitle}>All products are grown organically under the forest canopy by small farmer families <br/> in harmony with the ecosystem</p>
            <img src={dosselvaimpactbanner2} alt='impactbanner2'/>
            <div className={styles.buttonContainer}>
              <NavLink 
                  exact
                  to={'/about'}
              >
                  <p>Learn more about our agroforestry systems</p>
              </NavLink>
            </div>
          </div>
        </div>
        <Footer/>       
      </div>
    )
  }
  
  export default Impact;