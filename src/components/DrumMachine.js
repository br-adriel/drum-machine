import "./DrumMachine.css";

const DrumMachine = (props) => {
  return (
    <div id="drum-machine" class="drum-machine">
      {props.children}
    </div>
  );
};

export default DrumMachine;
