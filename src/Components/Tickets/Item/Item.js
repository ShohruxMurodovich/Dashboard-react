import "./Item.css"

import { More } from "../../../Assets/Images/Icons/Icons"


const Item = ({src , text , name , update, date, time, btntext, namedate, color }) =>{
  return(
    <li className="ticket-item">
      <img className="item__img" src={src} alt="Avatar" />

      <div className="wrapper detail-wrapper">
        <p className="item__detail-text">{text}</p>
      <span className="wrapper-info">{update}</span>
      </div>

      <div className="name-wrapper wraper">
      <h4 className="item__name">{name}</h4>
      <span className="wrapper-info">{namedate}</span>
      </div>

      <div className="date-wrapper wrapper">
      <p className="item__date">{date}</p>
      <span className="wrapper-info">{time}</span>
      </div>

      <span className={color}>{btntext}</span>

      <More className="more"/>
    </li>
  )
}

export default Item;