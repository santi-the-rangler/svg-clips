import React from 'react'
import './media-module.css'
import MediaCard from './media-card'
import MediaSvgOne from './media-svg-one'
import MediaSvgTwo from './media-svg-two'
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
      <MediaCard className="white">
        <MediaSvgTwo />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgTwo />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgTwo />
      </MediaCard>
    </div>
  )
}

export default MediaModule
