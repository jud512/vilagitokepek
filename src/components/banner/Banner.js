import React from 'react'
import  ReactDOM  from 'react-dom'
import styles from './Banner.module.scss'
import Navbar from '@components/navbar/Navbar'
import logo from '../../assets/logo-small.png'
import Image from 'next/image'


const Banner = () => {
  

  return (
    <div className={styles.banner} id="banner">
      <div className={styles.bannerTop}>
        <h2>világító faliképek, kisbútorok, dísztárgyak</h2>
        <div className={styles.logo}>
            <Navbar />
      </div>   
      </div>
          
        <div className={styles.greeting}>
           {/* <a href="#" className={styles.logoImg}>
           <Image src={logo} alt="Logo" width={150} height={50}/>
        </a> */}
          <h1>Üdvözöllek műhelyemben!</h1>
        </div>
       
        {/* <a href="#topics"><p>Munkáim</p></a>  */}
        {/* <p className={styles.change} onClick={changeBackground}>
          T
        </p> */}
    </div>
  )
}

export default Banner