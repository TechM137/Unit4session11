import Wheel from "./Wheel.js";

export default function Bicycle(props) {
  let Wheels = [];
  for (let i = 0; i < props.numberOfWheels; i++) {
    Wheels.push(<Wheel />);
  }

  return (
    <>
      <h2>
        Good morning, I am a Bicycle. I have {props.numberOfWheels} wheels
      </h2>
      {Wheels}
    </>
  );
}
