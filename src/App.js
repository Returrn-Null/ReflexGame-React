import React from 'react';
import Game from './components/game';
import Clock from './components/Clock'
import Helmet from 'react-helmet';
import BackGround from './components/backG'



function App() {
  if(!Clock.getState){
    return (
      <div>
        <BackGround>

        </BackGround>
        <Helmet>
                  <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <Game> </Game>
        
      </div>
    );
  }
  else{
    return (
      <div>
        <BackGround>

        </BackGround>
        <Helmet>
                  <style>{'body { background-color: black; }'}</style>
        </Helmet>
       
        <Clock></Clock>
      </div>
    );
  }
  
}

export default App;
