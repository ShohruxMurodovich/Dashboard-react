import "./Item.css"


const Item = ({text , icon}) =>{
  return (
    <a href="#link" className="case">
      <icon/>
      <h2 className="option">{text}</h2>
    </a>
  )
}

export default Item;