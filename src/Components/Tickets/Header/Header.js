import "./Header.css";
import { Search, Notification, Add } from "../../../Assets/Images/Icons/Icons";
import Avatar from "../../../Assets/Images/avatar.png";

const Header = ({title}) => {
  return(
    <div className="header">
    <h2 className="header__title">{title}</h2>
    <div className="header-right">
      <div className="icons">
        <Search className="search" />
        <Notification />
      </div>
      <div className="avatar">
        <h4 className="avatar__name">Jones Ferdinand</h4>
        <img src={Avatar} alt="Avatar"/>
      </div>
    </div>
  </div>
  )
}

export default Header;