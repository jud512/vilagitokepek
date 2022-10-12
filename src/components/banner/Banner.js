import React from 'react'
import styles from './Banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
        <h2>világító faliképek, kisbútorok, dísztárgyak</h2>
        <h1>Üdvözöllek műhelyemben!</h1>
        <a href="#topics"><p>Munkáim</p></a> 
    </div>
  )
}

export default Banner