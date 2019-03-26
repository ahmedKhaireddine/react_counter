import React from "react";
import Icon from "./core/Icon";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class Temperature extends React.Component{
    render(){
        return(
            <div className="box col-6 col-md-3">
                <h3>Temperature</h3>
                <Icon 
                name={"wb_sunny"} 
                styleicon={{fontSize : 100, color: "yellow"}}/>
                <p>{this.props.temperature} °C</p>
                <Slider 
                value={this.props.temperature}
                min={this.props.min} 
                max={this.props.max} 
                onChange={(value) => this.props.onChangeFn(value)}/>
            </div>
        );
    }
}

export default Temperature;