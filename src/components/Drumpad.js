import "./Drumpad.css";

const Drumpad = (props) => {
  const playAudio = () => {
    props.setActiveKey(props.label);
    document.getElementById(props.keyboardKey).play();
  };

  document.addEventListener("keydown", (e) => {
    console.log(e.code);
    if (e.key.toLowerCase() === props.keyboardKey.toLowerCase()) {
      playAudio();
    }
  });

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
