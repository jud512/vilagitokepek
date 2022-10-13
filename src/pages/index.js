import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';
import Banner from '@components/banner/Banner';
import Hero from '@components/hero/Hero';
import images from '@data/images';
import styles from '@styles/Home.module.scss'
import logo from '../assets/logo-small.png'
import Topics from '@components/topics/Topics';
import { search, mapImageResources, getFolders } from '@lib/cloudinary';
import {data} from '../data/data-topics' //topics for images
import Footer from '@components/Footer';

export default function Home({images: defaultImages, nextCursor: defaultNextCursor, folders}) {
  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  

  
  return (
    <>
      
      <Head>
        <title>Világító faliképek</title>
        <meta name="description" content="All of my cool images." />
      </Head>

      <div div className={styles.mainContainer}>
        
        <Hero>  
            <div className={styles.logo}>
                <a href="#"><Image src={logo} alt="Logo" width={150} height={50}/></a> 
            </div>             
            <Banner>                
            </Banner>
        </Hero>
        <Topics></Topics>
        <Container>
          
            <>
              {folders.map(folder => {
                console.log(folder);
                return (  
                  <div key={folder.path} id={folder.path}>
                    <h3  className={styles.foldertitle}>{folder.name}</h3>
                    
                    <ul className={styles.images}>
                  {
                    images.filter(image => image.folder === folder.name).map(image => {
                      return (
                        
                        <li key={image.id} className={styles.imageContainer}>
                          <a href={image.link} rel="noreferrer">
                            <div className={styles.imageImage}>
                              <Image layout="fill" objectFit='cover' src={image.image} alt="" />
                            </div>
                            <h3 className={styles.imageTitle}>
                              { image.filename }
                            </h3>
                          </a>
                        </li>
                      )
                  })}
                  </ul>


                  </div>
                )
              })}
            </>

            
        
        </Container>
      </div>
      <Footer></Footer>
    </>
  )
}

export async function getStaticProps() {
  const results = await search({
    // expression: 'folder=""'
    max_results: 500
  });
    const { resources, next_cursor: nextCursor} = results;
console.log('results', results);
    const images = mapImageResources(resources);
  
    const {folders} = await getFolders(); 

    // console.log('folders', folders);
  
    return {
      props: {
        images,
        nextCursor: nextCursor || false,
        folders
      }
    };
}