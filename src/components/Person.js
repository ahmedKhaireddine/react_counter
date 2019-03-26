import React from "react";
import Icon from "./core/Icon";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class Person extends React.Component{
    render(){
        return(
            <div className="box col-6 col-md-3">
                <h3> Steps</h3>
                <Icon 
                name={"directions_walk"} 
                styleicon={{ fontSize : 100, color : "black" }}/>
                <p>{this.props.steps} Steps</p> 
                <Slider 
                value={this.props.steps}
                min={this.props.min} 
                max={this.props.max} 
                onChange={(value) => this.props.onChangeFn(value)}/>  
            </div>
        );
    }
}

export default Person;