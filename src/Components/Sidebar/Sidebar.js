import { Logo, Overview, Tickets, Ideas ,  Contacts, Agents, Articles, Settings, Subscription } from "../../Assets/Images/Icons/Icons"
import Item from "./Item/Item";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo clasName="logo" />
      <Item to="/" Icon={Overview} text="Overview" />
      <Item to="/ticket" Icon={Tickets} text="Tickets" />
      <Item to="/ideas" Icon={Ideas} text="Ideas" />
      <Item to="/contact" Icon={Contacts} text="Contacts" />
      <Item to="/agents" Icon={Agents} text="Agents" />
      <Item to="/artickles" Icon={Articles} text="Articles" />
      <Item to="/settings" Icon={Settings} text="Settings" />
      <Item to="/subscription" Icon={Subscription} text="Subscription" />
    </div>
  )
}

export default Sidebar;