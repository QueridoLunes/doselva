import HamburgerMenu from 'react-hamburger-menu';
import {NavLink} from 'react-router-dom';
import React from 'react';
import styles from './Header.module.scss';
import dosselvalogo from '../../assets/images/dosselvalogo.svg';

// import {openMenu} from '../../store/actions/general-actions'

const HeaderMenuList = [
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
    name: 'Contact Us',
    href: '/contact'
  }
]

const Header = (props) => {

    return (
      <div className={`${styles.container} ${styles[props.background]}`}>
        <div className={styles.logoContainer}>
            <NavLink exact to={'/'}>
                <img src={dosselvalogo} alt="dos-selva-logo"/>
            </NavLink>
        </div>

        {(props.responsive) ? 
            <HamburgerMenu
                // isOpen={state.menuOpen}
                // menuClicked={()=>handleClick()}
                width={18}
                height={15}
                strokeWidth={1}
                rotate={0}
                borderRadius={0}
                animationDuration={0.5}
                className={styles.hamburger}
            />
            :
            <div className={styles.optionsContainer}>
                <ul className={styles.listContainer}>
                    {HeaderMenuList.map((option, value)=> {
                        return (
                            <li className={styles.itemstyle} key={value}>
                                <NavLink 
                                    exact
                                    to={option.href}
                                    activeClassName={styles.active}
                                >
                                    <p>{option.name}</p>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
        }
        
      </div>
    )
  }
  
  export default Header;