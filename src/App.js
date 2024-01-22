import './App.css';
import Die from './Die';


function App() {

  function createAllDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
     diceArray.push(Math.floor(Math.random * 6) + 1)
    }
    return diceArray;
  };

  

  return (
    <>
      <Die />
      <Die />
      <Die />
      <Die />
      <Die />
      <Die />
      <Die />
      <Die />
      <Die />
      <Die />
    </>
 )
}

export default App;
