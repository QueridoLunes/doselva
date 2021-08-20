import React from 'react';
import styles from './Product.module.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import dosselvamano from '../../assets/images/doselva_mano2.png';

import turmeric from '../../assets/images/Doselva_Product_01.jpg';
import ginger from '../../assets/images/Doselva_Product_02.jpg';
import vanilla from '../../assets/images/Doselva_Product_03.jpg';
import cardamom from '../../assets/images/Doselva_Product_04.jpg';
import lemongrass from '../../assets/images/Doselva_Product_05.jpg';
import hibiscus from '../../assets/images/Doselva_Product_06.jpg';



const Product = () => {

    return (
      <div className={styles.container}>
          <Header backgroundOrange/>
          <div className={styles.productContainer}>
            <div className={styles.text}>
              <h1>Organic spices full of ﬂavor <br/> and goodness</h1>
              <div className={styles.circleBox}>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
              </div>
            </div>
            <div className={styles.handImage}>
              <img src={dosselvamano} alt='hand'/>
            </div>
          </div>
         
          <div className={styles.messageContainer}>
            <div className={styles.messageBox}>
              <ul className={styles.productList}>
                <li className={styles.items}>
                  <div className={styles.images}>
                    <img src={turmeric} alt='turmeric'/>
                  </div>
                  <div className={styles.text}>
                    <h1>Turmeric</h1>
                    <p>Food-safe, organic turmeric in fresh rhyzomes, dried slices, <br/> powder or tea-cut to speciﬁcation.</p><br/>
                    <p>Our dried turmeric consistently lab tests at 6 to 8,5% curcumin levels, <br/> compared to the industry average of 1-4%.</p><br/>
                    <p>Harvest and export season for fresh turmeric is January to May with a <br/> current processing capacity of three containers. Dry turmeric supply year-round.</p>
                  </div>
                </li>
                <li className={styles.items}>
                  <div className={styles.images}>
                    <img src={ginger} alt='ginger'/>
                  </div>
                  <div className={styles.text}>
                    <h1>Ginger</h1>
                    <p>Conventional or organic ginger, either as fresh rhyzomes, dried slices, powder <br/> or tea-cut to speciﬁcation.</p><br/>
                    <p>Harvest and export season of fresh ginger is from January to May. <br/> Year-round supply of dried ginger</p>
                  </div>
                </li>
                <li className={styles.items}>
                  <div className={styles.images}>
                    <img src={vanilla} alt='vanilla'/>
                  </div>
                  <div className={styles.text}>
                    <h1>Vanilla</h1>
                    <p>High quality organic vanilla planifolia in whole beans ready for export grown <br/> under the forest canopy.</p><br/>
                    <p>Harvest season November to January, ready for export February.</p>
                  </div>
                </li>
                <li className={styles.items}>
                  <div className={styles.images}>
                    <img src={cardamom} alt='cardamom'/>
                  </div>
                  <div className={styles.text}>
                    <h1>Cardamom</h1>
                    <p>Different grades of organic cardamom, from bold green to MYQ and seeds.</p><br/>
                    <p>The harvest season is from October to December (80%), and from January to February (20%). <br/> Our products can be ground to speciﬁcation, powder or tea-bag-cut.</p>
                  </div>
                </li>
                <li className={styles.items}>
                  <div className={styles.images}>
                    <img src={lemongrass} alt='lemongrass'/>
                  </div>
                  <div className={styles.text}>
                    <h1>Lemon Grass</h1>
                    <p>Conventional and organic Lemon Grass, tea-bag-cut to speciﬁcation.</p><br/>
                    <p>Two varieties available all year round: Cymbopogon Citratus and Cymbopogon Flexuosus.</p>
                  </div>
                </li>
                <li className={styles.items}>
                  <div className={styles.images}>
                    <img src={hibiscus} alt='hibiscus'/>
                  </div>
                  <div className={styles.text}>
                    <h1>Hibiscus</h1>
                    <p>From November to February, we harvest and export both organic <br/> and conventional hibiscus.</p>
                    <p>Choose between two different varieties: Criolla and Salvadoreña. <br/> Available in dried ﬂowers, grounded powder or tea-bag-cut.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productbanner}/>
          <div className={styles.califications}/>
          <Footer/> 
      </div>
    )
  }
  
  export default Product;