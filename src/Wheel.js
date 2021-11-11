export default function Wheel(props) {
  console.log(props);
  return (
    <img
      src={props.src || "color-wheel.png"}
      alt="Wheel"
      style={{ width: "100px" }}
    />
  );
}
