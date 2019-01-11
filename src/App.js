// DEPENDENCIES | IMPORTS 
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Jumbotron from './components/Jumbotron';
import Body from './components/Body';
import Footer from './components/Footer';
import characters from './characters.json';

// STYLE
const styles ={
  body: { 
    background: "url https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj4jpzxzbLfAhUGKa0KHXi_DskQjRx6BAgBEAU&url=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fseamless-burger-pattern-vector-wallpaper-isolated-733407430&psig=AOvVaw0xqojYMz61VSnHn5eB39Hh&ust=1545539594880090",
   backgroundSize: "cover" 
  }
}

class App extends Component {
  state = {
    initial: characters,
    unselected: characters,
    topScore: 0,
    currentScore: 0,
    message: 'Click the Bob Burgers Characer to start!!'
  }

    // CARD SHUFFLE
  shuffle = array => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }

  // GAME LOGIC
  userSelect = id => {
    const selected = this.state.unselected.find(character => character.id === id)

    if(selected === undefined) {
      this.setState({
        unselected: characters,
        currentScore: 0,
        message: 'Incorrect, try again!',
        topScore: this.state.currentScore > this.state.topScore ? this.state.currentScore : this.state.topScore
        
      })
    }else{
      const unselectedCharacter = this.state.unselected.filter(character => character.id !== id)

      this.setState({
        unselected: unselectedCharacter,
        message: "You guessed correctly! Pick another character!",
        currentScore: this.state.currentScore + 1,
        topScore: this.state.currentScore >= this.state.topScore ? this.state.currentScore: this.state.topScore
      })

      
    }
    this.shuffle(characters)
  }
  render() {
    return (
      <div style={styles.body}>
        <Jumbotron message={this.state.message} current={this.state.currentScore} top={this.state.topScore}>Bob's Burger Memory Game!</Jumbotron>
        <div className='container'>
          {(this.state.initial).map(character => {
            return <Body
            id={character.id}
            key={character.id} 
            image={character.image} 
            charactername={character.charactername}
            gamelogic={this.userSelect} />
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

// EXPORT 
export default App;

