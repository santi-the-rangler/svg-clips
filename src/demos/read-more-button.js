import React from 'react'
import './media-card.css'

const ReadMoreButton = (props) => {
  const classes = 'mediacard ' + props.className

  return (
    <>
      <button className={classes}>Read More</button>
    </>
  )
}

export default ReadMoreButton
