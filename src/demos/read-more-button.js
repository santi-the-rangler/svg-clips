import React from 'react'
import styles from './media-module.module.css'

const ReadMoreButton = (props) => {
  return <button className={`${styles[props.className]}`}>Read More</button>
}

export default ReadMoreButton
