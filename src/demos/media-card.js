import styles from './media-module.module.css'

const MediaCard = (props) => {
  return (
    <div className={`${styles.mediacard} ${styles[props.className]}`}>
      {props.children}
    </div>
  )
}

export default MediaCard
