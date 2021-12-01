import Display from "./Display";
import DrumpadArea from "./DrumpadArea";
import { useState } from "react";
import "./DrumMachine.css";

const DrumMachine = (props) => {
  const [activeKey, setActiveKey] = useState("-");
  return (
    <div id="drum-machine" className="drum-machine">
      <DrumpadArea setActiveKey={setActiveKey} />
      <Display activeKey={activeKey} />
    </div>
  );
};

export default DrumMachine;
