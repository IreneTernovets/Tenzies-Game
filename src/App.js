import './App.css';
import Die from './Die';


function App() {

  function createAllDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
     diceArray.push(Math.floor(Math.random() * 6) + 1)
    }
    return diceArray;
  };


  const diceElements = createAllDice().map(die => <div>{die}</div>)
  

  return (
    <>
      { diceElements}
    </>
 )
}

export default App;
