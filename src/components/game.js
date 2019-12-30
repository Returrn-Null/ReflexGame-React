import React, { Component } from 'react';
import _ from "lodash";

import './button.css';

export default class Game extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      button: 0,
      won: false,
      playing: false,
      Counter: 0
      
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

componentDidMount(){
    var x = 0;
    var y = 0;
if(!this.state.playing){
  x = Math.random() * 1300 + 50;
  y = Math.random() * 530 + 50;
  this.setState({
      x,
      y
    })
} 
this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
}
componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}


positionUpdate(){
    var x = 0;
    var y = 0;
if(this.state.playing){
  x = Math.random() * window.innerWidth;
  y = Math.random() * window.innerHeight;
  this.setState({
      x,
      y
    })
}
}

componentDidUpdate() {
   
        _.delay(this.positionUpdate.bind(this),this.state.button); //cannot put on arrow notation in lodash 
      
}



  buttonHandler = () =>{
    if(!this.state.playing && this.state.button === 0){
        return <div>
          
        
        <button  className="buttonHandler" style={{marginLeft: (window.innerWidth)/2,top:(window.innerHeight)/2, position: "absolute", backgroundColor: "blue", color: "white"}} onClick= {() =>this.setState({ button: 1000})}>Easy</button>
        <button className="buttonHandler1"  style={{ marginLeft: (window.innerWidth)/2,top:(window.innerHeight)/2+50,position: "absolute", backgroundColor: "Green", color: "white"}} onClick= {()=>this.setState({ button: 800})}>Medium</button>
        <button  className="buttonHandler2" style={{marginLeft: (window.innerWidth)/2,top:(window.innerHeight)/2+100, position: "absolute", backgroundColor: "red", color: "white"}} onClick= {() =>this.setState({ button: 600})}>Hard</button> 
        
        
      
    </div>
    }
    if(!this.state.playing){
        return <div>
<button onClick={()=>this.setState({playing: true})}>Play</button>
        </div>
    }
    
      if(this.state.playing && !this.state.won){
          
          return <div>
            <button style={{marginLeft: this.state.x,top: this.state.y, position: "absolute"}} onClick={()=>this.setState({won: true})}>Catch Me</button>
          </div>
      }
  }
  

  render(){
    
      return <div>
        
         
         
         {this.buttonHandler()}
         
      </div>
     
  }
 
 
}