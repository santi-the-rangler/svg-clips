import React from 'react'
import './media-module.css'
import MediaCard from './media-card'
import MediaSvgOne from './media-svg-one'
const MediaModule = () => {
  return (
    <div>
      <h2>Media Module 2.0</h2>
      <MediaCard className="white">
        <MediaSvgOne />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgOne />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgOne />
      </MediaCard>
    </div>
  )
}

export default MediaModule
