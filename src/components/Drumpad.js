import "./Drumpad.css";
import { useEffect } from "react";

const Drumpad = (props) => {
  const keyCode = props.label.charCodeAt(0);
  const playAudio = () => {
    document.getElementById(props.label).play();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === keyCode) {
        playAudio();
      }
    });
  }, []);

  return (
    <>
      <button id={props.id} className="drum-pad" onClick={playAudio}>
        {props.label}
        <audio src={props.url} id={props.label} className="clip"></audio>
      </button>
    </>
  );
};

export default Drumpad;
