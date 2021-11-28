import "./DrumMachine.css";
import Drumpad from "./Drumpad";

const DrumMachine = (props) => {
  return (
    <div id="drum-machine" className="drum-machine">
      <Drumpad />
    </div>
  );
};

export default DrumMachine;
