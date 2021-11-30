import "./Controls.css";
import Display from "./Display";

const Controls = (props) => {
  return (
    <section className="controls">
      <Display activeKey={props.activeKey} />
    </section>
  );
};

export default Controls;
