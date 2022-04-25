import { Logo, Overview, Tickets, Contacts, Agents, Articles, Settings, Subscription } from "../../Assets/Images/Icons/Icons"
import Item from "./Item/Item";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo clasName="logo" />
      <Item icon={Overview} text="Overview"/>
      <Item icon={Tickets} text="Tickets"/>
      <Item icon={Contacts} text="Contacts"/>
      <Item icon={Agents} text="Agents"/>
      <Item icon={Articles} text="Articles"/>
      <Item icon={Settings} text="Settings"/>
      <Item icon={Subscription} text="Subscription"/>
    </div>
  )
}

export default Sidebar;