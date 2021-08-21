import React from 'react';
import styles from './Quality.module.scss';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import Slide1 from '../../assets/images/Doselva_Quality_01.jpg';
import Slide2 from '../../assets/images/Doselva_Quality_02.jpg';
import Slide3 from '../../assets/images/Doselva_Quality_03.jpg';
import Slide4 from '../../assets/images/Doselva_Quality_04.jpg';
import Slide5 from '../../assets/images/Doselva_Quality_05.jpg';
import Slide6 from '../../assets/images/Doselva_Quality_06.jpg';

import Back from '../../assets/images/back.png';
import Next from '../../assets/images/next.png';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Quality = () => {

    return (
      <div className={styles.container}>
          <Header background='blue'/>
          <div className={styles.qualityContainer}>
            <div className={styles.text}>              
              <h1>
                Doselva’s new processing <br/> 
                facility meets global food safety and <br/>
                sustainability standards.
              </h1>
              <p className={styles.subtitle}>
                It includes a raw material storage area; spaces for washing, slicing, drying and grinding spices; <br/>
                and a warehouse for the ﬁnished product. As a ﬁnal step in the drying process for food safety <br/>
                and quality, we use a mechanical heat pump dryer.
              </p>
              <div className={styles.circleBox}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
          </div>
          <div className={styles.carrouselContainer}>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              totalSlides={6}
            >
              <Slider>
                <Slide index={0}>
                  <img src={Slide1} alt="Slide1"/>
                </Slide>
                <Slide index={1}>
                  <img src={Slide2} alt="Slide2"/>
                </Slide>
                <Slide index={2}>
                  <img src={Slide3} alt="Slide3"/>
                </Slide>
                <Slide index={3}>
                  <img src={Slide4} alt="Slide3"/>
                </Slide>
                <Slide index={4}>
                  <img src={Slide5} alt="Slide3"/>
                </Slide>
                <Slide index={5}>
                  <img src={Slide6} alt="Slide3"/>
                </Slide>
              </Slider>
              <ButtonBack className={styles.BtnBack}>
                  <img src={Back} alt='Back'/>
              </ButtonBack>
              <ButtonNext className={styles.BtnNext}>
                  <img src={Next} alt='Next'/>
              </ButtonNext>
            </CarouselProvider>
          </div>
          <Footer/>       
      </div>
    )
  }
  
  export default Quality;