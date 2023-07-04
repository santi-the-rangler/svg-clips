import './card-text.css'
import ReadMoreButton from './read-more-button'
const CardText = (props) => {
  return (
    <div className="card-context">
      <h2 className="card-title">Digital Experience Platforms </h2>
      <p className="card-description">
        The Radius design system starter kit is a collection of open-source
        tools and libraries that guide and help you to build your design system
        faster.
      </p>
      <ReadMoreButton className={props.className} />
    </div>
  )
}
export default CardText
