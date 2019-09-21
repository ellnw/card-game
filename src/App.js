import React, { Component } from 'react';
import WordCard from './WordCard';
//import logo from './logo.svg';
import './App.css';
//import CharacterCard from './CharacterCard';
//const word = "Hello";
class App extends Component{
  restart = () => {
    window.location.reload(false);
  }
  render(){
    return(
      
      <div className="App">
        <h0>Welcome</h0>
        <WordCard value="THANAWUT"/>    
        <h1 id = 'result'> </h1>
        <button id="restart" class="button" onClick={this.restart}>Restart</button>
      </div>
    );
  }
}

export default App;
