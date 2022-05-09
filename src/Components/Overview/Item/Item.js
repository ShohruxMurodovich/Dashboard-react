import "./Item.css"

const Item = ({text , number}) =>{
  return(
    <li className="item">
      <p className="item__text">{text}</p>
      <h3 className="number">{number}</h3>
    </li>
  )
}

export default Item;