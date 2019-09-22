import React, { Component } from 'react';
import WordCard from './WordCard';
import './App.css';
//import CharacterCard from './CharacterCard';
//const word = "Hello";
const word = [
              ['Ell','wor'],
              ['hell','swim'],
              ['hello','worlds'],
              ['hellos','lynlss'],
            ]

//const word1 = ['Hello', 'Words']
var item = word[Math.floor(Math.random()*word.length)];

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      level: 0,
      word: word[0][Math.floor(Math.random()*word[0].length)]
    };
    }

  restart = () => {
    window.location.reload(false);
  }

  nxt_level = () => {
    let currentLevel  = this.state.level
    this.setState({
      level: currentLevel+1,
      word: word[currentLevel+1][Math.floor(Math.random()*word[currentLevel].length)]
    });
    console.log(this.state.word)
  }
  render(){
    console.log(this.state.word)
    return(
      <div className="App">
        <div className = "titleBg">
        <h0 id = "title">Welcome to Word Random Game</h0>
        </div>
        {
         
         
        } <WordCard value={this.state.word}/> 
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