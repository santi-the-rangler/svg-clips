import './media-svg.css'
import CardText from './card-text'

const MediaSvgTwo = () => {
  return (
    <div className="card-image">
      <svg
        width="313"
        height="238"
        viewBox="0 0 313 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M189.899 237.075C262.347 237.075 312.002 179.915 312.002 118.549C312.002 57.1605 261.533 0 189.899 0L35.3828 7.25402e-06L35.3828 237.075H189.899Z"
          fill="#CF4326"
        />
        <clipPath id="imageClipPathTwo">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M154.516 237.075C226.964 237.075 276.619 179.915 276.619 118.549C276.619 57.1605 226.15 0 154.516 0L0 7.25402e-06L0 237.075H154.516Z"
            fill="#F7856E"
          />
        </clipPath>

        <image
          href="https://i.ibb.co/5cFWfj4/Image-Hero.png"
          clipPath="url(#imageClipPathTwo)"
          width="313"
          height="238"
          preserveAspectRatio="xMaxYMid slice"
        />
      </svg>
      <CardText />
    </div>
  )
}

export default MediaSvgTwo
