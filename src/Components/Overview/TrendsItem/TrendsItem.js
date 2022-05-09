import "./TrendsItem.css"

const TrendsItem = ({text, number}) => {
  return(
    <li className="trends-right__item">
      <p className="trends-right__text">{text}</p>
      <h4 className="trends-right__number">{number}</h4>
    </li>
  )
}

export default TrendsItem;