import "./App.css";
import { Provider } from "react-redux";

import CounterApp from "./component/counterApp";
import { store } from "./component/store";

export default function App() {
  return (
    <main>
      <Provider store={store}>
        COUNTER - React Redux with Hooks
        <CounterApp />
      </Provider>
    </main>
  );
}
