import React, { Component } from 'react';
import WordCard from './WordCard';
//import logo from './logo.svg';
import './App.css';
//import CharacterCard from './CharacterCard';
//const word = "Hello";
const word = ['Ell','wor'];
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component{
  restart = () => {
    window.location.reload(false);
  }
  render(){
    return(
      
      <div className="App">
        <h0>Welcome</h0>
        <WordCard value={item.toUpperCase()}/> 
        <h1 id = 'result'> </h1>
        <h2 id="correct_word"> </h2>
        <button id="restart" class="button" onClick={this.restart}>Restart</button>
        <button id="nxt_level" class="button" onClick={this.restart}>Next Level</button>
      </div>
    );
  }
}

export default App;
