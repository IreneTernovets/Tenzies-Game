import './App.css';
import React, { useEffect } from "react";
import Die from './Die';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


function App() {

  const [dice, setDice] = React.useState(createAllDice())
  const [tenzies, setTenzies] = React.useState(false);

  useEffect(() => {
    const firstNum = dice[0].value;
    const allIsHeld = dice.every(die => die.isHeld === true)
    const allSameNumber = dice.every(die => die.value === firstNum)
    if (allIsHeld && allSameNumber) {
      setTenzies(true)
    }
    
 }, [dice])

  function generateDie() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid()
    }
  }

  function createAllDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
     diceArray.push(generateDie())
    }
    return diceArray;
  };



  const diceElements = dice.map(die => <Die
    value={die.value}
    key={die.id}
    isHeld={die.isHeld}
    holdDice={() => holdDice(die.id)}
  />)

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateDie();
    }))
    } else {
      setTenzies(false)
      setDice(createAllDice())
    }
    
  }

  return (
    <main>
      { tenzies && <Confetti />}
      <div className='game-text'>
        <h1>Tenzies🎲</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      </div>
    <div className='dice-container'>
      { diceElements}
      </div>
      <button className='roll-button' onClick={rollDice}>{tenzies ? "New Game" : "Roll" }</button>
    </main>
 )
}

export default App;
