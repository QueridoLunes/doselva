import {NavLink} from 'react-router-dom';
import React from 'react';
import styles from './Footer.module.scss';

import dosselvalogofooter from '../../assets/images/dosselvalogofooter.svg';

const FooterMenuList = [
  {
      name: 'Product',
      href: '/product'
  },
  {
      name: 'Impact',
      href: '/impact'
  },
  {
      name: 'About Us',
      href: '/about'
  },
  {
      name: 'Quality and Food Safety',
      href: '/quality'
  },
  {
    name: 'Stories from the field',
    href: '/stories'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]

const FooterSecondMenuList = [
    {
        name: 'About Us',
        href: '/about'
    },
    {
        name: 'Terms of Service',
        href: '/terms'
    },
    {
        name: 'Privacy Policy',
        href: '/privacy'
    },
    {
      name: 'Contact us',
      href: '/contact'
    }
  ]

const Footer = () => {

    return (
    <div className={styles.container}>
      <div className={styles.Footercontainer}>
        <div className={styles.addressContainer}>
            <div className={styles.logoContainer}>
                <a href="/">
                    <img src={dosselvalogofooter} alt="dos-selva-logo-footer"/>
                </a>
            </div>
            <div className={styles.address}>
                <p>Calle Guzman,</p>
                <p>Frente a La Casa de los Tres Mundos</p>
            </div>
            <div className={styles.office}>
                <p>Administrative Office:</p>
                <p>+50586815356</p>
                <p>info@doselva.com</p>
            </div>
        </div>
        <div className={styles.optionsContainer}>
            <ul className={styles.listContainer}>
                {FooterMenuList.map((option, value)=> {
                    return (
                        <li className={styles.itemstyle} key={value}>
                            <NavLink 
                                exact
                                to={option.href}
                                activeClassName="active-link"
                            >
                                <p>{option.name}</p>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div className={styles.optionsContainer}>
            <div className={styles.title}>
                <h1>Wholesale</h1>
            </div>
            <ul className={styles.listContainer}>
                {FooterSecondMenuList.map((option, value)=> {
                    return (
                        <li className={styles.itemstyle} key={value}>
                            <NavLink 
                                exact
                                to={option.href}
                                activeClassName="active-link"
                            >
                                <p>{option.name}</p>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>   
      </div>
      <div className={styles.secondFooter}>
        <p>©2021. All rights reserved — Doselva</p>
      </div>  
      </div>
    )
  }
  
  export default Footer;