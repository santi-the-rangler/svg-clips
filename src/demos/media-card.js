import './media-card.css'

const MediaCard = (props) => {
  const classes = 'mediacard ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default MediaCard
