import Die from "./die";
import { useState } from "react";

function App() {
  const [diceArray, setDiceArray] = useState(generateAllNewDice())

function generateAllNewDice() {
  return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
}

const diceElement = diceArray.map(dice => <Die value={dice} />)

function diceRoll () {
   setDiceArray(generateAllNewDice())
}


  return (
    <main>
      <div className="dice-container">
        {diceElement}
      </div>
      <button className="roll-dice" onClick={diceRoll}>Roll</button>
    </main>
  );
}

export default App;
