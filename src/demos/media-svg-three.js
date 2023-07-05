import './media-svg.css'
import CardText from './card-text'

const MediaSvgThree = (props) => {
  return (
    <div className="card-image">
      <svg
        width="0"
        height="0"
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
          // 1920x1280
          // href="https://i.ibb.co/5cFWfj4/Image-Hero.png"
          // 450x600
          // href="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80"
          // 600x600
          href="https://plus.unsplash.com/premium_photo-1681400699241-834781696dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          clipPath="url(#imageClipPathThree)"
          width="287"
          height="197"
          // using slice as the image width> height
          // The default behavior is meet which stretches the content in both the x and y dimension until it fills either the width or height of the viewBox.
          // The alternative - slice preserves the aspect ratio of the content but scales up the graphic until it fills both the width and height of the viewbox (clipping the content that overflows the viewBox).
          preserveAspectRatio="xMaxYMid slice"
        />
      </svg>
      <CardText className={props.className} />
    </div>
  )
}

export default MediaSvgThree
