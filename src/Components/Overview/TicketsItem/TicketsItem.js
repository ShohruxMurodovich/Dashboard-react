import "./TicketsItem.css"

const TicketsItem = ({ text, number }) => {
  return (
    <li className="tickets-item">
      <h3 className="tickets-text">{text}</h3>
      <p className="tickets-number">{number}</p>
    </li>
  )
}

export default TicketsItem;