import React from 'react'
import './media-module.module.css'
import MediaCard from './media-card'
import MediaSvgOne from './media-svg-one'
import MediaSvgTwo from './media-svg-two'
import MediaSvgThree from './media-svg-three'

const MediaModule = () => {
  return (
    <div>
      <h2>Media Module 2.0</h2>
      <MediaCard className="white">
        <MediaSvgOne className="red" />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgOne className="grey01" />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgOne className="red" />
      </MediaCard>
      <MediaCard className="white">
        <MediaSvgTwo className="red" />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgTwo className="grey01" />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgTwo className="red" />
      </MediaCard>
      <MediaCard className="white">
        <MediaSvgThree className="red" />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgThree className="grey01" />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgThree className="red" />
      </MediaCard>
    </div>
  )
}

export default MediaModule
