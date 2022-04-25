import "./BottomHeader.css"

const BottomHeader = ({ title, view, info }) => {
  return (
    <>
    <div className="bottom-case">
      <h2 className="title">{title}</h2>
      <a href="#link" className="text">{view}</a>
    </div>
    <span className="info">{info}</span>
    </>
  )
}

export default BottomHeader;