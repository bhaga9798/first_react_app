import React from "react"
import Table from "./Table.js"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            details : props.details
        }
    }
    clickHandler(){
        this.setState(
            {
                details : JSON.parse(document.getElementById("jsonArea").value)
            }
        )
    }
    render(){
        return(
            <div>
            <textarea id="jsonArea">{JSON.stringify(this.state.details,0,'\t')}</textarea>
            <div>JSON Validation has not been done. Kindly enter a valid and parsable JSON</div>
            <button style={{display:"block",height:"40px",marginTop:"20px"}} onClick={this.clickHandler.bind(this)}>CLICK TO GENERATE TABLE</button>
            <Table details={this.state.details}/>
            </div>
        )
    }
    
}

export default App;