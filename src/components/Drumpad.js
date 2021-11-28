import "./Drumpad.css";

const Drumpad = (props) => {
  return (
    <button id={props.id} className="drum-pad">
      {props.label}
    </button>
  );
};

export default Drumpad;
