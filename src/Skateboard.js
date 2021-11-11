import Wheel from "./Wheel.js";

export default function Truck(props) {
  let Wheels = [];
  for (let i = 0; i < props.numberOfWheels; i++) {
    Wheels.push(<Wheel />);
  }

  return (
    <>
      <h2>Hey, I am a skateboard. I have {props.numberOfWheels} wheels</h2>
      {Wheels}
    </>
  );
}
