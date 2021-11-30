import Controls from "./Controls";
import DrumpadArea from "./DrumpadArea";
import "./DrumMachine.css";

const DrumMachine = (props) => {
  return (
    <div id="drum-machine" className="drum-machine">
      <DrumpadArea />
      <Controls />
    </div>
  );
};

export default DrumMachine;
