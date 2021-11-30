import "./Display.css";

const Display = (props) => {
  return (
    <div id="display" className="display">
      <p>{props.text}</p>
    </div>
  );
};

export default Display;
