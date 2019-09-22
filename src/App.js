import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';
//import CharacterCard from './CharacterCard';
//const word = "Hello";
const word = ['Ell','wor'];
const word1 = ['Hello', 'Words']
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component{
  restart = () => {
    window.location.reload(false);
  }

  nxt_level = () => {
    
  }
  render(){
    return(
      <div className="App">
        <div className = "titleBg">
        <h0 id = "title">Welcome to Word Random Game</h0>
        </div>
          <WordCard value={item.toUpperCase()}/> 
          <h1 id = 'result'> </h1>
          <h2 id="correct_word"> </h2>
        
        <div className = "bg">
          <button id="restart" class="button" onClick={this.restart}>Restart</button>
          <button id="nxt_level" class="button" onClick={this.restart}>Next Level</button>
        </div>
      </div>
      
    );
  }
}

export default App;