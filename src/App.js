import Sidebar from "./Components/Sidebar/Sidebar";
import "./Assets/main.css";
import Ticket from "./Components/Tickets/Tickets"
import Overviev from "./Components/Overview/Overview"
import Ideas from "./Components/Ideas/Ideas";
import Agents from "./Components/Agents/Agents";
import Artickles from "./Components/Artickles/Artickles";
import { Routes, Route } from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import Subscription from "./Components/Subscription/Subscription";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="body-case">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Overviev/>}/>
        <Route path="/ticket" element={<Ticket/>}/>
        <Route path="/ideas" element={<Ideas/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/agents" element={<Agents/>}/>
        <Route path="/artickles" element={<Artickles/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
      </Routes>
    </div>
  );
}

export default App;