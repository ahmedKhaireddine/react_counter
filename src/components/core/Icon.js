import React from "react";

class Icon extends React.Component{
    render(){
        return(
            <i class="material-icons" style={this.props.styleicon} >{this.props.name}</i>
        );
    }
}
export default Icon;