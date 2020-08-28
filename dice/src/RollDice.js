import React, { useState } from "react";
import Die from "./die";

function RollDice() {
  const sides = ["one", "two", "three", "four", "five", "six"];

  const [die, setDie] = useState(["one", "one"]);

  function Roll() {
    const newDie1 = sides[Math.floor(Math.random() * sides.length)];
    const newDie2 = sides[Math.floor(Math.random() * sides.length)];
    setDie(() => [newDie1, newDie2]);
  }

  console.log(die);
  return (
    <>
      <h1>RollDice</h1>
      <div>
        {die.map((i) => (
          <i className={`Die fas fa-dice-${i}`} />
        ))}
      </div>
      <button onClick={Roll}>Random dadu</button>
    </>
  );
}

export default RollDice;
