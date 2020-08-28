import React, { useState } from "react";

function RandomIcons() {
  const options = ["angry", "anchor", "archive", "at", "baby", "bell", "bone"];

  const [icons, setIcons] = useState(["bell", "bone"]);
  function addIcon() {
    let idx = Math.floor(Math.random() * options.length);
    let newIcon = options[idx];
    setIcons((icon) => [...icon, newIcon]);
  }
  const icon = icons.map((i) => <i className={`fas fa-${i}`} />);
  return (
    <>
      <hr />
      <h1>Random Icon</h1>
      <h3>Icons: {icon}</h3>
      <button onClick={addIcon}>add new icon</button>
    </>
  );
}

export default RandomIcons;
