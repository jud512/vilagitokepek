import React from 'react'
import image from "../../assets/hero.jpg"
import styles from './Box.module.scss'
import Image from 'next/image'

const Box = ({id, img, topic, title, text}) => {
  return (
    <div className={styles.box}>
        
        <div className={styles.boximage}>
          <Image  src={img} alt={title}  layout="fill" objectFit='cover' />
        </div>
        <div className={styles.container}>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            <div className={styles.btncontainer}>
                <a className={styles.btnlink} href="#"><p className={styles.btnmain}>Tovább a képekhez</p></a>
          </div>                     
        </div>
        
    </div>
  )
}

export default Box