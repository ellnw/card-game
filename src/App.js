import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';
//import CharacterCard from './CharacterCard';
//const word = "Hello";
const word = [
              ['Ell','wor'],
              ['hell','swim'],
              ['hello','worlds']
            ]

//const word1 = ['Hello', 'Words']
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      level: 0,
      word: word[0][Math.floor(Math.random()*word.length)]
    };
    }

  restart = () => {
    window.location.reload(false);
  }

  nxt_level = () => {
    this.setState({
      level: this.state.level+1,
      word: word[this.state.level+1][Math.floor(Math.random()*word.length)]
    });
  }
  render(){
    return(
      <div className="App">
        <div className = "titleBg">
        <h0 id = "title">Welcome to Word Random Game</h0>
        </div>
          <WordCard value={this.state.word}/> 
          <h1 id = 'result'> </h1>
          <h2 id="correct_word"> </h2>
        
        <div className = "bg">
          <button id="restart" class="button" onClick={this.restart}>Restart</button>
          <button id="nxt_level" class="button" onClick={this.nxt_level}>Next Level</button>
        </div>
      </div>
      
    );
  }
}

export default App;