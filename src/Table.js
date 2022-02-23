import React from 'react'
import './index.css'
import Cell from './Cell.js'
import strRepeat from './Utils.js';

class Table extends React.Component{
  render(){
    let details = this.props.details;
    let row = details.length;
    let column = details.reduce((acc,cur)=>{
      return (cur.length>acc) ? cur.length : acc;
    },0);
    var styleObj={
      gridTemplateColumns : strRepeat(column)
    }
    var lists = [];
    for(var i=0;i<row;i++){
      for(var j=0;j<column;j++){
        if(details[i][j]){
          lists.push(<Cell key={i+" "+j} jsonObj={details[i][j]}/>)
        }
      }
    }
    return(
      <div style={{height:"500px",width:"1000px"}}>
    <div className="table1" style={styleObj}>
        {lists} 
    </div></div>
    )
  }
}
  
export default Table;