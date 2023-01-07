import React, { useEffect, useState } from "react";
import styles from "./Modal.module.scss";
import image from "../../assets/hero.jpg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Modal = ({ images, clickedImg, setClickedImg }) => {
  const [currentIndex, setCurrentIndex] = useState(
    images.findIndex((image) => image.id === clickedImg.id)
  );
  const [prevIndex, setPrevIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0) {
      setPrevIndex(images.length - 1);
      setNextIndex(currentIndex + 1);
    } else if (currentIndex === images.length - 1) {
      setPrevIndex(currentIndex - 1);
      setNextIndex(0);
    } else {
      setPrevIndex(currentIndex - 1);
      setNextIndex(currentIndex + 1);
    }
  }, [currentIndex]);

  const [currentImage, setCurrentImage] = useState(clickedImg);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleRight();
    }

    if (diff < -5) {
      handleLeft();
    }

    setTouchPosition(null);
  };

  const handleClose = (e) => {
    setClickedImg(null);
  };

  const handleLeft = () => {
    const length = images.length;
    if (currentIndex === 0) {
      setCurrentIndex(length - 1);
      // setCurrentImage(images[currentIndex]);
    } else {
      setCurrentIndex(currentIndex - 1);
      // setCurrentImage(images[currentIndex])
    }
  };

  const handleRight = () => {
    const length = images.length;
    if (currentIndex + 1 === length) {
      setCurrentIndex(0);
      // setCurrentImage(images[currentIndex])
    } else {
      setCurrentIndex(currentIndex + 1);
      // setCurrentImage(images[currentIndex]);
    }
  };

  useEffect(() => {
    setCurrentImage(images[currentIndex]);
  }, [currentIndex]);

  // useEffect(() => {
  //     console.log('images length:',images.length);
  //     console.log('currentIndex: ',currentIndex);
  //     console.log('image name: ', currentImage.id);
  // }, [currentImage])

  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modalContainer}>
          <span className={styles.closeBtn}>
            <AiOutlineClose onClick={handleClose} />
          </span>
          <div className={styles.overlayArrowLeft}>
            <div onClick={handleLeft}>
              <IoIosArrowBack />{" "}
            </div>
          </div>
          <div></div>

          <div
            className={styles.imagesContainer}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{
              translate: `${-currentIndex * 100}vw`,
              width: `${images.length * 100}vw`,
            }}
          >
            {/* <div className={styles.imgContainer}>
              <div className={styles.imgItems}>
                <img
                  src={currentImage ? images[prevIndex].image : image}
                  alt="kép"
                  className={styles.img}
                />
                <div className={styles.imgTitle}>
                  {images[prevIndex].filename}
                </div>
              </div>
            </div> */}
            {images.map((item) => (
              <div className={styles.imgContainer}>
                <div className={styles.imgItems}>
                  <img
                    src={item ? item.image : image}
                    alt="kép"
                    className={styles.img}
                  />
                  <div className={styles.imgTitle}>{item.filename}</div>
                </div>
              </div>
            ))}

            {/* 
            <div className={styles.imgContainer}>
                  <img
                    src={currentImage ? currentImage.image : image}
                    alt="kép"
                    className={styles.img}
                  />
                  <div className={styles.imgTitle}>{currentImage.filename}</div>
                </div>
            <div className={styles.imgContainer}>
              <img
                src={currentImage ? images[nextIndex].image : image}
                alt="kép"
                className={styles.img}
              />
              <div className={styles.imgTitle}>
                {images[nextIndex].filename}
              </div>
            </div> */}

            {/* <Image
              src={currentImage ? currentImage.image : image}
              alt="kép"
              layout="fill"
              objectFit="contain"
              className={styles.images}
              style="position: relative"
            />
            <Image
              src={currentImage ? images[nextIndex].image : image}
              alt="kép"
              layout="fill"
              objectFit="contain"
              className={styles.imgNext}
              style="position: relative"
            /> */}
          </div>

          <div className={styles.overlayArrowRight}>
            <div onClick={handleRight}>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
