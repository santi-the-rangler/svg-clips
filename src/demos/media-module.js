import React from 'react'
import './media-module.css'
import MediaCard from './media-card'
import MediaSvgOne from './media-svg-one'
import MediaSvgTwo from './media-svg-two'
import MediaSvgThree from './media-svg-three'
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
      <MediaCard className="white">
        <MediaSvgThree />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgThree />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgThree />
      </MediaCard>
    </div>
  )
}

export default MediaModule
