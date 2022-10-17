import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div><a href="#">Kezdőlap</a></div>
        <div><a href="#topics">Munkáim</a></div>
        <div><a href="#contact">Elérhetőség</a></div>

    </div>
  )
}

export default Navbar