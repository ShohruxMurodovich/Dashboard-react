import "./Item.css"
import { NavLink } from "react-router-dom";

const Item = ({ text, Icon, to }) => {
  return (
    <NavLink to={to} href="#link" className="case">
      <Icon />
      <h2 className="option">{text}</h2>
    </NavLink>
  )
}

export default Item;