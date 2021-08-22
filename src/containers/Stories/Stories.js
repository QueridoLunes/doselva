import React from 'react';
import styles from './Stories.module.scss';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import news from '../../assets/images/Doselva_About_Us_04.png';
import forest from '../../assets/images/Doselva_About_Us_05.png';
import {NavLink} from 'react-router-dom';


const Stories = () => {

    return (
      <div className={styles.container}>
        <Header background='green'/>
        <div className={styles.storiesContainer}>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.image}>
                <img src={news} alt='news'/>
                <div className={styles.text}>
                  <h1>Social Impact</h1>
                  <p>
                    April 8, 2021 <br/>
                    by Doselva
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.columnRow}>
                <div className={`${styles.columnRowOne} ${styles.red}`}>
                  <div className={styles.text}>
                    <h1>
                      Jefferson’s journey and Doselva’s <br/>
                      founding story
                    </h1>
                    <p>
                      April 8, 2021 <br/>
                      by Doselva
                    </p>
                  </div>
                </div>
                <div className={`${styles.columnRowTwo} ${styles.green}`}>
                  <div className={styles.text}>
                    <h1>Spices for impact</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.columnRow}>
                <div className={`${styles.columnRowOne} ${styles.blue}`}>
                  <div className={styles.text}>
                    <h1>
                      Jefferson’s journey and Doselva’s <br/>
                      founding story
                    </h1>
                    <p>
                      April 8, 2021 <br/>
                      by Doselva
                    </p>
                  </div>
                </div>
                <div className={`${styles.columnRowTwo} ${styles.orange}`}>
                  <div className={styles.text}>
                    <h1>
                      Grown in the <br/>
                      forests of <br/>
                      Central America
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.image}>
                <img src={forest} alt='forest'/>
                <div className={styles.text}>
                  <h1>
                    Agroforestry: <br/>
                    Environmental <br/>
                    Impact
                  </h1>
                  <p>
                    April 8, 2021 <br/>
                    by Doselva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <NavLink 
              exact
              to={'/about'}
          >
              <p>Load more stories</p>
          </NavLink>
        </div>
        <Footer/>       
      </div>
    )
  }
  
  export default Stories;