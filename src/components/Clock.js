import React, { Component } from 'react';
import _ from "lodash";
import Game from './game.js';

export default class Clock extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        
        Clock: 10,
       finished: false
        
      };
      this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
      componentDidMount(){
       
    this.updateWindowDimensions();
            window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      componentDidUpdate() {
   
         
        _.delay(this.decrementClock.bind(this), 1000);
}
decrementClock =()=>{
    this.setState({Clock: this.state.Clock-1});
    if(this.state.Clock === 0){
      
      this.setState({finished: true});
      
    }
    
  }
  getState =() =>{
    if(this.state.finished){
      return true;
    }
  }
  
render(){
    if(!this.state.finished){
        return <div>
   
            


            </div>
    }
    else{
        return <div>
            <button className='buttonHandler' style={{marginLeft: (window.innerWidth)/2,top:(window.innerHeight)/2, position: "absolute", backgroundColor: "blue", color: "white"}} onClick= {() =>this.setState({ button: 1000})}> Finished you fucker</button>
        </div>
    }

}



    }