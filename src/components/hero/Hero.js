import React from 'react'
import styles from './Hero.module.scss'

const Hero = ({children}) => {
  return (
    <header className={styles.hero}>
        {children}
    </header>
  )
}

export default Hero