import React from 'react'
import ImageCell from './ImageCell.js'
import Tooltip from './Tooltip.js';
class Cell extends React.Component {
    constructor(props){
      super(props);
      this.clickCount = 0;
      this.state={
        anyEvent:"none"
      }
    }

    blurHandler(event){
      event.target.setAttribute("contentEditable",false);
      this.setState({
        anyEvent:"none"
      })
    }

    doubleClickHandler(event){
      this.setState({
        anyEvent: "doubleClick"
      }) 
    }

    singleClickHandler(event){
      if(event == "doubleClick"){
        return;
      }
      this.setState(function(prevState){
          return{
            anyEvent : prevState.anyEvent == "click" ? "none" : "click"
          }
        })
    }

    clickHandler(event){
      this.clickCount++;
      if(this.clickCount == 1){
        this.singleClickTimer = setTimeout(()=>{
          console.log(this);
          this.clickCount = 0;
          if(this.props.jsonObj.hint){
            this.singleClickHandler(this.state.anyEvent);
          }
        },400)
      }
      else if(this.clickCount == 2 && this.props.jsonObj.editable){
        clearTimeout(this.singleClickTimer);
        setTimeout((event)=>{console.log(event);event.target.focus();},0,event);
        this.clickCount = 0;
        this.doubleClickHandler(event);
      }
    }

    render(){
      var details = this.props.jsonObj;
      var imgElement = details.icon && <ImageCell/>
      var parentClassName = (details.editable || details.hint) ? "grid-cell editable" : "grid-cell";
      var contentEditable = false;
      var textStyleObj;
      if(this.state.anyEvent == "click"){
        var tooltipElement = <Tooltip hint= {details.hint}/>
      }
      else if(this.state.anyEvent == "doubleClick"){
        contentEditable = true;
        parentClassName+=" contentEditable";
      }
     
      return(
      <div className={parentClassName} onClick={(details.hint || details.editable) ? (e)=>{this.clickHandler(e)}: undefined} onBlur={this.state.anyEvent == "doubleClick" ? this.blurHandler.bind(this) : undefined}>
          {imgElement}
          <div className="textCell" style={textStyleObj} contentEditable={contentEditable.toString()}>{details.label}</div>
          {tooltipElement}
      </div>
      )
      }
  }

  export default Cell;