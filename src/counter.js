import React from "react";

class Counter extends React.Component{
    render() {
        return(
            <div className="counter">
                {/* en recupere le state envoyer par la class App par 
                l'expression suivant  this.props.counterNum */}
                <p>{this.props.counterNum}</p>
                {/* on recupere la function envoyer par this.props.addFn
                et en l'execute */}
                <button onClick={this.props.addFn}>+</button>
            </div>
        );
    }
}
//pour donner un nom de class il faut inporter le fichier de css
//de la maniere suivante import "./App.css"; et 
//l'ecrire dans la class Counter => className="counter"
// chercher la valeur de l'attribut de la class Counter 
//qui était deja dans l'appele de la class dans la class app avec {this.props.num}

export default Counter;