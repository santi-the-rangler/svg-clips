import React from 'react'
import './media-module.css'

const MediaModule = () => {
  return (
    <div>
      <div className="multiPathContainer">
        <h2>Media Module 2.0</h2>
        <svg
          width="316"
          height="229"
          viewBox="0 0 316 229"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M228.858 0V228.789H0L228.858 0Z"
            fill="#CF4326"
          />
          <clipPath id="svgClip" clipPathUnits="objectBoundingBox">
            <path
              d="M184.963 13.459H18.8203V215.331H316.001L184.963 13.459Z"
              fill="#F7856E"
            />
          </clipPath>
          <image href="people-working.png" height="229" width="316" />
        </svg>
      </div>
    </div>
  )
}

export default MediaModule
