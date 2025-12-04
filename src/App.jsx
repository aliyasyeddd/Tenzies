import Die from "./die";
import { useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [diceArray, setDiceArray] = useState(() => generateAllNewDice());

  let gameWon = diceArray.every(die => die.isHeld) && diceArray.every(die => die.value === diceArray[0].value)
  

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }));
  }

  function diceRoll() {
    gameWon 
    ? setDiceArray(generateAllNewDice())
    : setDiceArray(oldDice => oldDice.map(dice => 
      dice.isHeld 
      ? dice 
      : {...dice, value: Math.ceil(Math.random() * 6)}
    ))}

  function toggleHold(id) {
    setDiceArray(prevDice => prevDice.map(dice => 
        dice.id === id ? { ...dice, isHeld: !dice.isHeld } : dice
      ))
  }

  const diceElement = diceArray.map((dieObj) => (
    <Die
      key={dieObj.id}
      value={dieObj.value}
      isHeld={dieObj.isHeld}
      hold={() => toggleHold(dieObj.id)}
    />
  ));

  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
       <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">{diceElement}</div>
      <button className="roll-dice" onClick={diceRoll}>
        {gameWon ? "New Game": "Roll"}
      </button>
    </main>
  );
}

export default App;
