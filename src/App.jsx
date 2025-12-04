import Die from "./die";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [diceArray, setDiceArray] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }));
  }

  const diceElement = diceArray.map((dieObj) => (
    <Die key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} />
  ));

  function diceRoll() {
    setDiceArray(generateAllNewDice());
  }

  return (
    <main>
      <div className="dice-container">{diceElement}</div>
      <button className="roll-dice" onClick={diceRoll}>
        Roll
      </button>
    </main>
  );
}

export default App;
