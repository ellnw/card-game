import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import _ from 'lodash';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}


export default class WordCard extends Component{

    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
        console.log(props.isSurrenderConfirm);
      
    }
    
    activationHandler = (c) => {
        console.log(`${c} has been activated.`)
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
                document.getElementById('result').innerHTML = `You Win`
            }
            else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
                document.getElementById('result').innerHTML = `Try again (${this.state.attempt})  `
                    if(this.state.attempt == 3){
                        document.getElementById('result').innerHTML = `GameOver `
                        setTimeout(() =>  window.location.reload(false),2000) 
                    }
            }
        }
    }

    
    render(){
        return(
            <div>
            { Array.from(this.props.value).map((c,i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>)}
            </div>
        );
    }


}