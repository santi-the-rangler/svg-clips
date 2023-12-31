import styles from './media-module.module.css'
import CardText from './card-text'

const MediaSvgTwo = (props) => {
  return (
    <div className={styles['card-image']}>
      <svg viewBox="0 0 313 238" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          className={styles.isClippedTwo}
          // 1920x1280
          // href="https://i.ibb.co/5cFWfj4/Image-Hero.png"
          // 450x600
          href="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80"
          // 600x600
          // href="https://plus.unsplash.com/premium_photo-1681400699241-834781696dc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
          // clipPath="url(#imageClipPathTwo)"
          // using slice as the image width> height
          // The default behavior is meet which stretches the content in both the x and y dimension until it fills either the width or height of the viewBox.
          // The alternative - slice preserves the aspect ratio of the cont
          preserveAspectRatio="xMaxYMid slice"
        />
      </svg>
      <CardText className={props.className} />
    </div>
  )
}

export default MediaSvgTwo
