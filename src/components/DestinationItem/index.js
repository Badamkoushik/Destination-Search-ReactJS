import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="list-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="main-paragraph">{name}</p>
    </li>
  )
}

export default DestinationItem
