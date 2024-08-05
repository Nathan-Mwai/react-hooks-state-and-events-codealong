import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

function handleToggle(){
  setIsOn((turnOn) => !turnOn)
}

const color = isOn ? `red` : `white`

  return <button style={{backgroundColor: color}} onClick={handleToggle}>{isOn? `ON` : `OFF`}</button>;
}

export default Toggle;
