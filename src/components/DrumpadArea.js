import "./DrumpadArea.css";
import Drumpad from "./Drumpad";

const DrumpadArea = (props) => {
  const drumpads = [
    {
      id: "Heater-1",
      keyboardKey: "Q",
      label: "Heater 1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "Heater-2",
      keyboardKey: "W",
      label: "Heater 2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "Heater-3",
      keyboardKey: "E",
      label: "Heater 3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "Heater-4_1",
      keyboardKey: "A",
      label: "Heater 4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "Heater-6",
      keyboardKey: "S",
      label: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "Dsc_Oh",
      keyboardKey: "D",
      label: "Open HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Kick_n_Hat",
      keyboardKey: "Z",
      label: "Kick n' Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "RP4_KICK_1",
      keyboardKey: "X",
      label: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "Cev_H2",
      keyboardKey: "C",
      label: "Closed HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div className="drumpad-area">
      {drumpads.map((item) => {
        return (
          <Drumpad
            key={item.keyboardKey}
            keyboardKey={item.keyboardKey}
            label={item.label}
            url={item.url}
            id={item.id}
            setActiveKey={props.setActiveKey}
          />
        );
      })}
    </div>
  );
};

export default DrumpadArea;
