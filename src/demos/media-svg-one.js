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
          // 1920x1280
          // href="https://i.ibb.co/5cFWfj4/Image-Hero.png"
          // 450x600
          // href="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80"
          // 600x600
          href="https://plus.unsplash.com/premium_photo-1681400699241-834781696dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
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
