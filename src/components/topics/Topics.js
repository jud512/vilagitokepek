import React from 'react'
import Box from '../box/Box'
import { data } from '../../data/data-topics'
import styles from './Topics.module.scss'

const Topics = () => {
    const topics = data;
  return (
    <div className={styles.topics} id='topics'>
        {
            topics.map((item) => {
                const{id, img, topic, title, text} = item;
                return(
                    <Box key={id} id={id} img={img} topic={topic} title={title} text={text}/>
                )
            })
        }
    </div>
  )
}

export default Topics