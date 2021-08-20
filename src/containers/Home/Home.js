import React from 'react';
import styles from './Home.module.scss';
import {NavLink} from 'react-router-dom';
import dosselvamano from '../../assets/images/doselva_mano.png';
import dosselvabanner from '../../assets/images/doselva_banner2.png';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {

    return (
      <div className={styles.container}>
          <Header/>
          <div className={styles.homeContainer}>
            <div className={styles.text}>
              <div className={styles.homeHeader}>
                <p>¡Hola! from Doselva</p>
                <p>Spices for impact</p>
              </div>
              
              <h1>Grown in the forests of Central America <br/> Organic spices full of ﬂavor and goodness</h1>
              <div className={styles.circleBox}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
          </div>
          <div className={styles.messageContainer}>
            <div className={styles.messageBox}>
              <NavLink 
                exact
                to={'/impact'}
              >
                  <p>Engine for social change Partner of small family farmers</p>
              </NavLink>
            </div>
          </div>
          <div className={styles.handContainer}>
            <div className={styles.handBox}>
              <div className={styles.handImage}>
                <img src={dosselvamano} alt='hand'/>
              </div>
              <div className={styles.handText}>
                <p>Kind to the earth <br/> In harmony with the ecosystem</p>
              </div>
            </div>
          </div>
          <div className={styles.bannerContainer}>
            <div className={styles.bannerBox}>
              <div className={styles.firstColumn}>
                <div className={styles.firstRow}>
                  <p>Get to know our story! <br/> Meet Celia & Jefferson</p>
                </div>
                <div className={styles.secondRow}>
                  <p>Check out <br/> our processing facility</p>
                </div>
              </div>
              <div className={styles.secondColumn}>
                <img src={dosselvabanner} className={styles.image} alt='home-banner'/>
                  <p>Become a <br/> wholesale partner</p>
                </div>
            </div>
          </div>
          <Footer/>       
      </div>
    )
  }
  
  export default Home;