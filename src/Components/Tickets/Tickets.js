import "./Tickets.css"
import Header from "./Header/Header"
import { Sort, Filter, ArrowLeft, ArrowRight } from "../../Assets/Images/Icons/Icons"
import Item from "./Item/Item"
import avatar1 from "../../Assets/Images/item-1.png"
import avatar2 from "../../Assets/Images/item-2.png"
import avatar3 from "../../Assets/Images/item-3.png"
import avatar4 from "../../Assets/Images/item-4.png"
import avatar5 from "../../Assets/Images/item-5.png"
import avatar6 from "../../Assets/Images/item-6.png"
import avatar7 from "../../Assets/Images/item-7.png"
import avatar8 from "../../Assets/Images/item-8.png"




const Ticket = () => {
  return (
    <div className="ticket">
      <Header title="Tickets"/>
      <div className="all-tickets">
        <div className="all-ticket-head">
          <h2 className="all-ticket-head__title">All tickets</h2>
          <div className="icon__case">
            <div className="icon">
              <Sort />
              <a href="#link" className="icon__text">Sort</a>
            </div>
            <div className="icon">
              <Filter />
              <a href="#link" className="icon__text">Filter</a>
            </div>
          </div>
        </div>

        <div className="body-text-case">
          <p className="body__text first">Ticket details</p>
          <p className="body__text second">Customer name</p>
          <p className="body__text third">Date</p>
          <p className="body__text fourth">Priority</p>
        </div>

        <ul className="ticket__list">
          <Item src={avatar1} text="Contact Email not Linked" name="Tom Cruise" update="Updated 1 day ago" namedate="on 24.05.2019" date="May 26, 2019" time="6:30 PM" btntext="HIGH" color="red" />
          <Item src={avatar2} text="Adding Images to Featured Posts" name="Matt Damon" update="Updated 1 day ago" namedate="on 24.05.2019" date="May 26, 2019" time="8:00 AM" btntext="LOW" color="yellow" />
          <Item src={avatar3} text="When will I be charged this month?" name="Robert Downey" update="Updated 1 day ago" namedate="on 24.05.2019" date="May 26, 2019" time="7:30 PM" btntext="High" color="red" />
          <Item src={avatar4} text="Payment not going through" name="Christian Bale" update="Updated 2 days ago" namedate="on 24.05.2019" date="May 25, 2019" time="5:00 PM" btntext="NORMAL" color="green" />
          <Item src={avatar5} text="Unable to add replies" name="Henry Cavil" update="Updated 2 days ago" namedate="on 24.05.2019" date="May 25, 2019" time="4:00 PM" btntext="High" color="red" />
          <Item src={avatar6} text="Downtime since last week" name="Chris Evans" update="Updated 3 days ago" namedate="on 23.05.2019" date="May 25, 2019" time="2:00 PM" btntext="NORMAL" color="green" />
          <Item src={avatar7} text="Referral Bonus" name="Sam Smith" update="Updated 4 day ago" namedate="on 22.05.2019" date="May 22, 2019" time="11:30 AM" btntext="LOW" color="yellow" />
          <Item src={avatar8} text="How do I change my password?" name="Steve Rogers" update="Updated 6 days ago" namedate="on 21.05.2019" date="May 24, 2019" time="1:00 PM" btntext="NORMAL" color="green" />
        </ul>

        <div className="ticket-footer">
          <div className="ticket-footer__inner">
            <span className="ticket-footer__rows">Rows per page:
              <select className="ticket-footer__select">
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="16">16</option>
              </select>
            </span>

            <span className="ticket-footer__pages">1-8 of 1240</span>

            <button className="btn-arr"><ArrowLeft className="arrowleft"/></button>
            <button className="btn-arr"><ArrowRight className="arrowright"/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket;