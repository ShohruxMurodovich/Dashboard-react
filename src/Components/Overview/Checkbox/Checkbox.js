import { type } from "@testing-library/user-event/dist/type";
import "./Checkbox.css"

const Checkbox = ({text, checkname, description, type, color}) => {
  return(
    <div className="check-case">
    <label className="label">
    <input type="checkbox" name={checkname}/>
    {text}
  </label>
   <span className={color}>{description}</span>
  </div>
  )
}

export default Checkbox;