import { useSelector } from "react-redux";
function CounterApp() {
  const selectedData = useSelector((state) => state.count);
  return <h1>Counter App---- {selectedData}</h1>;
}
export default CounterApp;
