import Wheel from "./Wheel.js";

export default function Car(props) {
  let Wheels = [];
  for (let i = 0; i < props.numberOfWheels; i++) {
    Wheels.push(<Wheel />);
  }

  return (
    <>
      <h2>Hi, I am a Car! I have {props.numberOfWheels} wheels</h2>
      {Wheels}
    </>
  );
}
