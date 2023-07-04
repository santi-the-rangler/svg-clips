import './media-svg.css'
import CardText from './card-text'

const MediaSvgThree = () => {
  return (
    <div className="card-image">
      <svg
        width="287"
        height="197"
        viewBox="0 0 287 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M212.793 142.512C256.23 142.512 286.001 108.151 286.001 71.2624C286.001 34.3606 255.742 0 212.793 0H20.5V142.512H212.793Z"
          fill="#CF4326"
        />

        <clipPath id="imageClipPathThree">
          <path d="M148.368 0H0V196.197H285.999L148.368 0Z" fill="#F7856E" />
        </clipPath>

        <image
          href="https://i.ibb.co/5cFWfj4/Image-Hero.png"
          clipPath="url(#imageClipPathThree)"
          width="287"
          height="197"
          preserveAspectRatio="xMaxYMid slice"
        />
      </svg>
      <CardText />
    </div>
  )
}

export default MediaSvgThree
