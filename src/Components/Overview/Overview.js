import "./Overview.css"
import Avatar from "../../Assets/Images/avatar.png"
import { Search, Notification, Add } from "../../Assets/Images/Icons/Icons";
import Item from "./Item/Item"
import TrendsItem from "./TrendsItem/TrendsItem";
import BottomHeader from "./BottomHeader/BottomHeader";
import TicketsItem from "./TicketsItem/TicketsItem";
import Checkbox from "./Checkbox/Checkbox";

const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <h2 className="header__title">Overview</h2>
        <div className="header-right">
          <div className="icons">
            <Search className="search" />
            <Notification />
          </div>
          <div className="avatar">
            <h4 className="avatar__name">Jones Ferdinand</h4>
            <img src={Avatar} alt="Avatar" />
          </div>
        </div>
      </div>
      <ul className="list">
        <Item number="60" text="Unresolved" />
        <Item number="16" text="Overdue" />
        <Item number="43" text="Open" />
        <Item number="64" text="On hold" />
      </ul>
      <div className="trends">
        <div className="trends-left">
          <h3 className="trends-left__title">Today’s trends</h3>
          <div className="trends-left__case">
            <p className="trends-left__text">as of 25 May 2019, 09:41 PM</p>
            <div className="wrapper">
              <div className="today-case">
                <span className="line"></span>
                <span className="today-text">Today</span>
              </div>
              <div className="today-case">
                <span className="line line-primary"></span>
                <span className="today-text">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
        <ul className="trends-right__list">
          <TrendsItem text="Resolved" number="449" />
          <TrendsItem text="Recived" number="426" />
          <TrendsItem text="Average first response time" number="33m" />
          <TrendsItem text="Average response time" number="3h 8m" />
          <TrendsItem text="Resolution within SLA" number="94%" />
        </ul>
      </div>
      <div className="bottom-case">
        <div className="tickets bottom">
          <BottomHeader title="Unresolved tickets" view="View details" info="Group" />
          <ul className="tickets-list">
            <TicketsItem text="Waiting on Feature Request" number="4238" />
            <TicketsItem text="Awaiting Customer Response" number="1005" />
            <TicketsItem text="Awaiting Developer Fix" number="914" />
            <TicketsItem text="Pending" number="281" />
          </ul>
        </div>

        <div className="tasks bottom">
          <BottomHeader title="Tasks" view="View all" info="Today" />
          <div className="newtask-case">
            <p className="newtask-text">Create new task</p>
            <button className="newtask-btn">+</button>
          </div>
          <Checkbox text="Finish ticket update" color="yellow" checkname="finish" description="Urgent" />
          <Checkbox text="Create new ticket example" color="green" checkname="finish" description="New" />
          <Checkbox text="Update ticket report" color="default" checkname="finish" description="Default" />
        </div>
      </div>
    </div>
  )
}

export default Main;