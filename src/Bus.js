import Wheel from "./Wheel.js";

export default function Bus(props) {
  let Wheels = [];
  for (let i = 0; i < props.numberOfWheels; i++) {
    Wheels.push(<Wheel src="bus.png" />);
  }

  return (
    <>
      <h2>Hello, I am a Bus. I have {props.numberOfWheels} wheels </h2>
      {Wheels}
    </>
  );
}
