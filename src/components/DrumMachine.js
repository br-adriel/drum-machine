import "./DrumMachine.css";
import DrumpadArea from "./DrumpadArea";

const DrumMachine = (props) => {
  return (
    <div id="drum-machine" className="drum-machine">
      <DrumpadArea />
    </div>
  );
};

export default DrumMachine;
