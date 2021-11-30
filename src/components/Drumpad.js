import "./Drumpad.css";
import { useEffect } from "react";

const Drumpad = (props) => {
  const keyCode = props.keyboardKey.charCodeAt(0);
  const playAudio = () => {
    props.setActiveKey(props.label);
    document.getElementById(props.keyboardKey).play();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === keyCode) {
        playAudio();
      }
    });
  }, []);

  return (
    <>
      <button id={props.id} className="drum-pad" onClick={playAudio}>
        {props.keyboardKey}
        <audio src={props.url} id={props.keyboardKey} className="clip"></audio>
      </button>
    </>
  );
};

export default Drumpad;
