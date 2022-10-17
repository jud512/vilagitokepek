import React, { useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import image from '../../assets/hero.jpg'
import {GoArrowLeft, GoArrowRight} from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'

const Modal = ({images, clickedImg, setClickedImg}) => {
    const [currentIndex, setCurrentIndex] = useState(images.findIndex( image => image.id === clickedImg.id));
    const [currentImage, setCurrentImage] = useState(clickedImg);
    
    const handleClose = (e) => {
       setClickedImg(null)
    }

    const handleLeft = () => {
        const length = images.length;
        if( currentIndex === 0){
            setCurrentIndex(length-1);
            // setCurrentImage(images[currentIndex]);
        } else {
            setCurrentIndex( currentIndex - 1);
            // setCurrentImage(images[currentIndex])
        }
    }

    const handleRight = () => {
        const length = images.length;
        if( currentIndex + 1 === length ){
            setCurrentIndex(0);
            // setCurrentImage(images[currentIndex])
        } else{
            setCurrentIndex(currentIndex + 1);
            // setCurrentImage(images[currentIndex]);
        }     
        
    }

    useEffect(() => {
        setCurrentImage(images[currentIndex]);
    }, [currentIndex])

    // useEffect(() => {
    //     console.log('images length:',images.length);
    //     console.log('currentIndex: ',currentIndex);
    //     console.log('image name: ', currentImage.id);
    // }, [currentImage])

    return (
    <>
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <span className={styles.closeBtn} >
                    <AiOutlineClose  onClick={handleClose}/>
                </span>
                <div className={styles.overlayArrowLeft} onClick={handleLeft}>
                    <GoArrowLeft />
                </div>
                <div>
                    
                </div>
                <div className={styles.img}>
                    <Image src={currentImage ? currentImage.image : image} alt="kép" layout="fill" objectFit='contain'/>
                    <div className={styles.imgTitle}>
                        {currentImage.filename}
                    </div>
                </div>
                
                <div className={styles.overlayArrowRight} onClick={handleRight}>
                    <GoArrowRight />
                </div>

            </div>
           
            

        </div>
 
    </>
     )
}

export default Modal