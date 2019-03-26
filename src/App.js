//3 etape a mettre obligatoirement pour faire marcher l'appli
//1 importer
//2 render 
//3 export
import React from "react";
import "./App.css";
import Person from "./components/Person";
import HeartRate from "./components/HeartRate";
import Water from "./components/Water";
import Temperature from "./components/Temperature"

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
    //1 etape creation du costructeur de la class App qui contient
    // a l'interieur la state avec tout les clé utile
    constructor(props){
        super(props)
        this.state = {
            water: 1.5,
            heart: 120,
            steps: 3000,
            temperature: -10
        };
    }
    // 2 etape Creation desfonctions qui change de la valeur du state
    onChangeHeartRate = (value) => {
        this.setState({heart : value});
    }
    onChangeSteps = (value) => {
        this.setState({steps : value});
    }
    onChangeTemperature = (value) =>{
        this.setState({temperature : value})
    }
    onChangeWater = ( )=> {
        
    }

    render() {
        return ( 

        <div className="container-fluid cadre">
            <div className="row">
            {/* 3 etape envoyer la reference de la function a tout les page */}
                <Water />
                <Person 
                steps={this.state.steps} 
                min={MIN_STEPS} max={MAX_STEPS} 
                onChangeFn={this.onChangeSteps}/>
                <HeartRate 
                heart={this.state.heart} 
                min={MIN_HEART} max={MAX_HEART} 
                onChangeFn={this.onChangeHeartRate}/>
                <Temperature 
                temperature={this.state.temperature} 
                min={MIN_TEMPERATURE} max={MAX_TEMPERATURE} 
                onChangeFn={this.onChangeTemperature} />

            </div>
        </div>
        );
    }
}

export default App;


// appler le class Counter dans le return de la class App le nombre de fois volu 
// et le passer un attribut de cette facon num={1}
// import Counter from "./counter";
// class App extends React.Component {
//     // j'ai cree un state qui prend le un cle num avec un valeur de 1
//     state ={
//         num:1
//     }
//     // j'ai cree un methde dans la class App qui rajoute 1 a le state que j'ai cree avant
//     addOne(){
//         this.setState({
//             num: this.state.num +1
//         })
//     }
//     render() {
//         return ( 
//         <div className="counter">
//             {/* 1er facon c'est de envoyer un la methode 
//         addOne a la class counter qui va l'executer  */}
//             <Counter counterNum={this.state.num} addFn={() => this.addOne()}/>
//             {/* 2eme facon utiliser l'evenement onClick de react et a l'interieur
//         mettre une function */}
//             <button onClick={() =>{
//                 this.setState({
//                     num:this.state.num -1
//                 })
//             }
//             }
//             >-</button>
//             {/* <Counter num={2}/>
//             <Counter num={3}/> */}
//         </div>
//         );
//     }
// }