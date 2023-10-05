import React from 'react'
import Logo from '../Icons/Logo'
import styles from './Tabbar.module.scss'

const Tabbar = () => {
  return (
    <nav className={styles.tabbar}>
      <Logo />
    </nav>
  )
}

export default Tabbar
