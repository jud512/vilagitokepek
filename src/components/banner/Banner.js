import React from 'react'
import  ReactDOM  from 'react-dom'
import styles from './Banner.module.scss'
import Navbar from '@components/navbar/Navbar'
import logo from '../../assets/logo-small.png'
import Image from 'next/image'


const Banner = () => {
  const changeBackground = () => {
    const element = document.getElementById('banner');
    console.log(element);
    ReactDOM.findDOMNode(element).style.background = 'linear-gradient(rgba(7, 5, 1, 0.7), rgba(15, 10, 2, 0.7)), url("../../assets/hero_v2.jpg") center/cover no-repeat';
  }

  return (
    <div className={styles.banner} id="banner">
        <h2>világító faliképek, kisbútorok, dísztárgyak</h2>
        <div className={styles.logo}>
            <Navbar />
        </div>     
        <h1>Üdvözöllek műhelyemben!</h1>
        <a href="#" className={styles.logoImg}>
          <Image src={logo} alt="Logo" width={150} height={50}/>
        </a>
        {/* <a href="#topics"><p>Munkáim</p></a>  */}
        {/* <p className={styles.change} onClick={changeBackground}>
          T
        </p> */}
    </div>
  )
}

export default Banner