import React from 'react';
import styles from './About.module.scss';
import {NavLink} from 'react-router-dom';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';

import linkedin from '../../assets/images/ln.png'

import jeff from '../../assets/images/Doselva_About_Us_01.jpg';
import Aaron from '../../assets/images/Doselva_About_Us_02.jpg';
import Shayna from '../../assets/images/Doselva_About_Us_03.jpg';

const About = () => {

    return (
      <div className={styles.container}>
        <Header/>
        <div className={styles.aboutContainer}>
          <div className={styles.video}>
            <p>LINK AL VIDEO</p>
          </div>
        </div>
        <div className={styles.messageContainer}>
          <div className={styles.messageBox}>
            <p>Learn more about our social impact</p>
          </div>
        </div>
        <div className={styles.aboutUsContainer}>
          <div className={styles.text}>
            <p className={styles.headerTitle}>Our Team</p>
            <h1>Board Members</h1>
          </div>
          <div className={styles.boardContainer}>
            <ul className={styles.boardList}>
              <li className={styles.boardMembers}>
                <div className={styles.boardImages}>
                  <div className={styles.imageContainer}>
                    <img src={jeff} alt='jeff'/>
                  </div>
                  <a href={'#'} className={styles.lnIcon}>
                    <img src={linkedin} alt='linkedin jeff'/>
                  </a>
                </div>
                <div className={styles.boardDetail}>
                  <h1>Jefferson Shriver</h1>
                  <p className={styles.description}>
                    Doselva’s CEO and co-founder is a passionate environmentalist who has spent over twenty <br/>
                    years living in Central America. During his early days in the area, Jefferson would take excursions <br/>
                    out to the last stretches of virgin forest that remained in Nicaragua, or in neighboring Honduras.  <br/>
                    The wastelands cleared by slashing and burning impressed him so much that it became part of <br/>
                    his life vocation to ﬁnd a way in which sustainable agricultural livelihoods could co-exist <br/>
                    harmoniously with forested landscapes.
                  </p><br/>
                  <p className={styles.quote}>“Jefferson short quote”</p><br/>
                  <p className={styles.description}>
                    Along the following years, which lead to the foundation of Doselva in 2017, the current CEO <br/>
                    of the company kept experimenting -both professionally and in his own farm- with sustainable <br/>
                    land use management strategies. In time, he found out that high value spice plants like vanilla <br/>
                    and turmeric, cultivated beneath a multi-layered canopy, could guarantee both resilient rural  <br/>
                    economies and thriving, biodiverse ecosystems.
                  </p>
                </div>
              </li>
              <li className={styles.boardMembers}>
                <div className={styles.boardImages}>
                  <div className={styles.imageContainer}>
                    <img src={Aaron} alt='Aaron'/>
                  </div>
                </div>
                <div className={styles.boardDetail}>
                  <h1>Aaron Sachowitz</h1>
                  <p className={styles.description}>
                    Doselva’s co-founder is a dedicated and experienced educator and social activist. <br/>
                    Aaron has been able to combine his teaching and institutional governance responsibilities <br/>
                    at Saint Mary’s College with many years of service (two of them as chair) on the   <br/>
                    Board of Directors of COLAGE, the only national organization expressly dedicated to supporting  <br/>
                    people with LGBTQ+ caregivers. 
                  </p><br/>
                  <p className={styles.quote}>“Aaron short quote”</p><br/>
                  <p className={styles.description}>
                    Both before and after becoming a community entrepreneur with the foundation of Doselva,  <br/>
                    Aaron dedicated much of his scholarship to the pressing issue of food justice.  <br/>
                    He has published award winning research on the matter, and -being an Associate Professor of Media  <br/>
                    Technologies and Culture- he is committed to a long term, nation-wide project to harness the   <br/>
                    multimedia capabilities of the internet to achieve social impact through the collection and mapping <br/>
                    of food stories.
                  </p>
                </div>
              </li>
              <li className={styles.boardMembers}>
                <div className={styles.boardImages}>
                  <div className={styles.imageContainer}>
                    <img src={Shayna} alt='Shayna'/>
                  </div>
                  <a href={'#'} className={styles.lnIcon}>
                    <img src={linkedin} alt='linkedin jeff'/>
                  </a>
                </div>
                <div className={styles.boardDetail}>
                  <h1>Shayna Harris</h1>
                  <p className={styles.description}>
                    Doselva’s third board member and investor has vast experience in the agri-business with focus  <br/>
                    on fair tradeand sustainable supply chains. She is a grounded leader who brings innovative visions  <br/>
                    to life with a strong executional track record across Fortune 100 (Mars), fast-growth start up   <br/>
                    (Farmer’s Fridge), and the nonproﬁt sector (Oxfam).
                  </p><br/>
                  <p className={styles.quote}>“Shayna short quote”</p><br/>
                  <p className={styles.description}>
                    She is also active as the Managing Director at Supply Change Capital, a venture ﬁrm  <br/>
                    she co-founded with the intention of investing at the most promising and progressive  <br/>
                    intersections between food, culture and technology. 
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contactUsContainer}>
          <NavLink exact to={'/contact'}>
            <div className={styles.contactUsBox}>
              <p>Contact Us</p>
            </div>
          </NavLink>
        </div>
        <Footer/>       
      </div>
    )
  }
  
  export default About;