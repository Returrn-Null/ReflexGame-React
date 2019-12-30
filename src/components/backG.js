import React, { Component } from 'react';
import _ from "lodash";
import ls from './LS.mp4';





export default class backG extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
      }
      
      componentDidMount() {
        document.body.classList.add("background-black");
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }
      
  render() {
    return (
      <body>
             
               <video  loop autoPlay muted width={this.state.width-20} height={this.state.height-30}>
                  <source src= { ls } type="video/mp4" />
                  
               </video>



      </body>
    );
  }
}

