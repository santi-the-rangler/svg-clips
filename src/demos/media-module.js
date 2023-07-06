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
        <MediaSvgOne className="button-red" />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgOne className="button-grey01" />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgOne className="button-red" />
      </MediaCard>
      <MediaCard className="white">
        <MediaSvgTwo className="button-red" />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgTwo className="button-grey01" />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgTwo className="button-red" />
      </MediaCard>
      <MediaCard className="white">
        <MediaSvgThree className="button-red" />
      </MediaCard>
      <MediaCard className="grey01">
        <MediaSvgThree className="button-grey01" />
      </MediaCard>
      <MediaCard className="grey04">
        <MediaSvgThree className="button-red" />
      </MediaCard>
    </div>
  )
}

export default MediaModule
