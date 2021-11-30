import "./DrumpadArea.css";
import Drumpad from "./Drumpad";

const DrumpadArea = (props) => {
  const drumpads = [
    {
      id: "Heater-1",
      label: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "Heater-2",
      label: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "Heater-3",
      label: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "Heater-4_1",
      label: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "Heater-6",
      label: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "Dsc_Oh",
      label: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Kick_n_Hat",
      label: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "RP4_KICK_1",
      label: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "Cev_H2",
      label: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  return (
    <div className="drumpad-area">
      {drumpads.map((item) => {
        return (
          <Drumpad
            key={item.label}
            label={item.label}
            url={item.url}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default DrumpadArea;
