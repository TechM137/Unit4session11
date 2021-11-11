import "./styles.css";
import Car from "./Car";
import Bicycle from "./Bicycle";
import Bus from "./Bus";
import Truck from "./Truck";
import Skateboard from "./Skateboard";
export default function App() {
  return (
    <div className="App">
      <Car numberOfWheels="4" />
      <Bicycle numberOfWheels="2" />
      <Bus numberOfWheels="6" />
      <Truck numberOfWheels="8" />
      <Skateboard numberOfWheels="4" />
    </div>
  );
}
