import './media-svg-one.css'
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
        <clipPath id="imageClipPaths">
          <path
            d="M184.963 13.459H18.8203V215.331H316.001L184.963 13.459Z"
            fill="#F7856E"
          />
        </clipPath>

        <image
          href="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
          clipPath="url(#imageClipPaths)"
          width="316"
          height="229"
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>
      <CardText />
    </div>
  )
}

export default MediaSvgOne
