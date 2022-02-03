import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function handelClick(){
    setIsOn((isOn)=>!isOn)
  }
  const color = isOn ? "red" : "white";



  return <button onClick={handelClick} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;

}

export default Toggle;
