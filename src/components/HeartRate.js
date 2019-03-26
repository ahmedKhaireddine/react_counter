import React from "react";
import Icon from "./core/Icon";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

class HeartRate extends React.Component{
    render(){
        return(
            <div className="box col-6 col-md-3">
                <h3>Heart</h3>
                <Icon 
                name={"favorite"} 
                styleicon={{ fontSize : 100, color : "red" }}/>
                <p>{this.props.heart} BPM</p>
                <Slider 
                value={this.props.heart}
                min={this.props.min} 
                max={this.props.max} 
                onChange={(value) => this.props.onChangeFn(value)}/>
            </div>
        );
    }
}
export default HeartRate;