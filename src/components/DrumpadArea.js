import "./DrumpadArea.css";
import Drumpad from "./Drumpad";

const DrumpadArea = (props) => {
  return (
    <div className="drumpad-area">
      <Drumpad label="Q"></Drumpad>
      <Drumpad label="W"></Drumpad>
      <Drumpad label="E"></Drumpad>
      <Drumpad label="A"></Drumpad>
      <Drumpad label="S"></Drumpad>
      <Drumpad label="D"></Drumpad>
      <Drumpad label="Z"></Drumpad>
      <Drumpad label="X"></Drumpad>
      <Drumpad label="C"></Drumpad>
    </div>
  );
};

export default DrumpadArea;
