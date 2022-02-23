import React from 'react'

function Tooltip(props){
    return(
      <div className="tooltiptext" style={{display:"block"}}>
    <div className="tooltipInner">{props.hint}</div></div>
    )
  }

export default Tooltip;