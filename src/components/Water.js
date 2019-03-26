import React from "react";
import Icon from "./core/Icon";
class Water extends React.Component{
    render(){
        return(
            <div className="box col-6 col-md-3">
                <h3>Water</h3>
                <Icon name={"local_drink"} styleicon={{fontSize : 100, color: "blue"}}/>
            </div>
        );
    }
}

export default Water;