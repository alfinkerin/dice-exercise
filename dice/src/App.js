import React from "react";

import "./App.css";
import RollDice from "./RollDice";
import RandomIcons from "./RandomIcons";

function App({ i }) {
  return (
    <div className="App">
      <RollDice />
      <RandomIcons />
    </div>
  );
}

export default App;
