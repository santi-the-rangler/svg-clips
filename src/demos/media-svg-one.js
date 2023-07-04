import './media-svg.css'
import CardText from './card-text'

const MediaSvgOne = () => {
  return (
    <div className="card-image">
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
        <clipPath id="imageClipPathOne">
          <path
            d="M184.963 13.459H18.8203V215.331H316.001L184.963 13.459Z"
            fill="#F7856E"
          />
        </clipPath>

        <image
          href="https://i.ibb.co/5cFWfj4/Image-Hero.png"
          clipPath="url(#imageClipPathOne)"
          width="316"
          height="229"
          // using slice as the image width> height
          // The default behavior is meet which stretches the content in both the x and y dimension until it fills either the width or height of the viewBox.
          // The alternative - slice preserves the aspect ratio of the cont
          preserveAspectRatio="xMaxYMid slice"
        />
      </svg>
      <CardText />
    </div>
  )
}

export default MediaSvgOne
